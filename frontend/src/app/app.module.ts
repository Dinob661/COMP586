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

//use for refresh
import {HashLocationStrategy, LocationStrategy} from '@angular/common';


//routes home is default route
var routes =[
  {
  path: 'messages',
  component: HomeComponent
},
{//to see all messages (regardless of user)
  path: '',
  component: MessagesComponent
},
//to see only a specific users messages
{
  path: 'messages/:name',
  component: MessagesComponent
},
{
  path: 'messages/:me',
  component: MessagesComponent
},
//Registration path
{
  path: 'register',
  component: RegisterComponent
},
//Login Path
{
  path: 'login',
  component: LoginComponent
},
//User
{
  path: 'user',
  component: UserComponent
}

];

@NgModule({
  declarations: [
    AppComponent, MessagesComponent, NewMessageComponent, NavComponent, HomeComponent, RegisterComponent, LoginComponent, UserComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    HttpModule,
  ],
  providers: [WebService, AuthService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }