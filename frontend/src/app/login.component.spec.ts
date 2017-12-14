import {TestBed, ComponentFixture, inject} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {LoginComponent } from './login.component';

import{
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { HttpModule } from '@angular/http';
import { WebService } from './web.service';
import { NewMessageComponent} from './new-message.component';
import { NavComponent } from './nav.component';
import { HomeComponent} from './home.component';
import {RegisterComponent } from './register.component';
import { AuthService } from './auth.service';
import {UserComponent} from './user.component';


// return false to show the user is not logged in
class MockAuthService extends AuthService {
  get isAuthenticated() {
    return false;
  }
}


describe('Component: Login', () => {
    //componentService is an instance of AuthService
    let componentService: AuthService;
    let auth: MockAuthService;

  beforeEach(() => {

    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService]
    });

    // Configure the component
    TestBed.overrideComponent(
        LoginComponent,
        {set: {providers: [{provide: AuthService, useClass: MockAuthService}]}}
    );

  });
  // show Mock and Component Service are different
    it('Should return false to show mock and component are different ', () => {
        expect(componentService instanceof MockAuthService).toBeFalsy();
        });
});
