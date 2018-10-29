import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

import { LoggerService } from '../../core/logger.service';
import { Account } from '../../account/shared/account.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<firebase.User>;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore,
    private loggerService: LoggerService,
    private ngZone: NgZone,
    private router: Router
  ) {
    this.user = angularFireAuth.user;

  }

  signInWithGoogle() {
    this.angularFireAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userCredential: firebase.auth.UserCredential) => {
        this.loggerService.log('Signed in with Google');

        this.angularFirestore
          .collection<Account>('accounts')
          .doc(userCredential.user.uid)
          .set({
            uid: userCredential.user.uid
          })
          .then((result: void) => {
            this.ngZone.run(() => this.router.navigateByUrl('/dashboard'));
          })
          .catch((error: firebase.firestore.FirestoreError) => {
            this.loggerService.error(`Failed to add user account doc:
            userCredential.user.uid: ${userCredential.user.uid}
            error: ${error.message ? error.message : error.code.toString()}`);
          });
      }).catch((error: firebase.auth.Error) => {
        this.loggerService.error(`Failed to sign in with Google:
          error: ${error.message ? error.message : error.code}`);
      });
  }

  signOut(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.angularFireAuth.auth
        .signOut()
        .then((result: void) => {
          this.loggerService.log('Signed out');
          this.router.navigateByUrl('/');
          resolve();
        })
        .catch((error: firebase.auth.Error) => {
          this.loggerService.error(`Failed to sign out:
            error: ${error.message ? error.message : error.code}`);
          reject(error);
        });
    });
  }

  isSignedIn(): Observable<firebase.User> {
    return this.user.pipe(first());
  }

  getUserInitial(): Observable<string> {
    return this.isSignedIn()
      .pipe(
        map((currentUser: firebase.User) => {
          if (currentUser) {
            this.loggerService.log(`Get user initial: ${currentUser.email[0]}`);
            return currentUser.email[0];
          } else {
            return '';
          }
        })
      );
  }
}
