import { Component } from '@angular/core';
import { WebService } from './web.service';
import { MatSnackBar } from '@angular/material';
import { AuthService } from './auth.service';


@Component({
    selector: 'user',
    template: ` 
            <mat-card class="card">
                <mat-input-container>
                    <input matInput [(ngModel)]="model.firstName" placeholder="First Name">
                </mat-input-container>
                <mat-input-container>
                    <input matInput [(ngModel)]="model.lastName" placeholder="Last Name">
                </mat-input-container>
                <mat-input-container>
                    <input matInput [(ngModel)]="model.email" placeholder="email">
                </mat-input-container>
                <mat-input-container>
                    <input matInput [(ngModel)]="model.password" placeholder="password">
                </mat-input-container>
                <button mat-raised-button color="primary" (click) = "saveUser(model)">Save Changes</button>
            </mat-card>

             `
})

export class UserComponent {

    model = {
        firstName: '',
        lastName:'',
        email:''
    }

    constructor(private webService: WebService, private sb: MatSnackBar, private auth: AuthService){}
       
    ngOnInit(){
        this.webService.getUser().subscribe( res => {
            this.model.firstName = res.firstName;
            this.model.lastName = res.lastName;
            this.model.email = res.email;
        })
    }
    saveUser(userData){
        this.webService.saveUser(userData).subscribe();
        this.sb.open("Information Updated!", 'close', { duration: 5000 });
    }

    deleteUser(){
        this.webService.deleteUser().subscribe();
        this.auth.logout();
        this.sb.open("Account Deleted", 'close', { duration: 5000 });
    }
}