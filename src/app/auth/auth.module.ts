import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { AuthService } from './shared/auth.service';
import { AuthGuardService } from './shared/auth-guard.service';
import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatButtonModule,
  ],
  declarations: [
    SignInComponent,
    SignUpComponent,
  ],
  providers: [
    AuthGuardService,
    AuthService,
  ]
})
export class AuthModule { }
