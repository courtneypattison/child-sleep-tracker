import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sn-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  creator = 'Courtney Pattison';
  currentYear = 2018;
  licenseURL = 'https://github.com/courtneypattison/slumber-numbers/blob/master/LICENSE';
  licenseName = 'MIT';
}
