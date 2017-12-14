import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import {RouterModule} from '@angular/router';

// Pass in info from backend to nav bar. example auth.userName returns username obtained from DB
@Component({
    selector: 'nav',
    template: ` 
    <mat-toolbar color="purple-green" font-family="Sans-serif">
            Bring Pi
            <button mat-button routerLink="/">Home</button>
            <button *ngIf="auth.isAuthenticated" mat-button routerLink="/messages">Post Message</button>
            <button *ngIf="auth.isAuthenticated" mat-button [routerLink]="['/messages', auth.userName]">My Posts</button>
            <span style="flex:1 1 auto"></span>
            <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/login">Login</button>
            <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/register">Register</button>
            <button *ngIf="auth.isAuthenticated" mat-button routerLink="/user">Welcome {{auth.userName}}</button>
            <button *ngIf="auth.isAuthenticated" mat-button routerLink="/login" (click)="auth.logout()">Logout</button>
        </mat-toolbar>
             `
})

export class NavComponent {
    constructor(private auth: AuthService){



    }
 
}