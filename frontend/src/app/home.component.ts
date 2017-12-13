import { Component } from '@angular/core';
import { MessagesComponent } from './messages.component';
import { NavComponent } from './nav.component';

//this page holds the frontend template info.
@Component({
  selector: 'home',
  template: `
  <new-message></new-message>
  <messages></messages>`,
  
  styleUrls: ['./app.component.css']
})
export class HomeComponent {}

