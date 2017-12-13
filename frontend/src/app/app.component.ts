import { Component, OnInit } from '@angular/core';
import { NavComponent } from './nav.component';
//this page holds the frontend template info.
@Component({
  selector: 'app-root',
  template: `
  <nav></nav>
  <router-outlet></router-outlet>
  `,
  
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  constructor() { }
}