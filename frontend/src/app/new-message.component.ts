import { WebService } from './web.service';
import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material';


// if user is not authenticated hide input forms and button
@Component({
    selector: 'new-message',
    template: `
    <mat-card *ngIf="auth.isAuthenticated" class="card">
        <mat-card-content>
            <mat-input-container>
                <textarea  [(ngModel)]="message.text" matInput placeholder = "Type your post here!"></textarea>
            </mat-input-container>
            <mat-card-actions>
                <button (click)="post()"  mat-raised-button color="primary">POST</button>
            </mat-card-actions>
        </mat-card-content>
    </mat-card>
             `
})

export class NewMessageComponent {

    constructor(private webService: WebService, private auth: AuthService, private sb: MatSnackBar){}

    //this displays the message
    message = {
        MessageId: "messageId" + (new Date()).toLocaleString('en-US'),
        OwnerId: this.auth.Id,
        owner: this.auth.userName,
        text: "",
        date: (new Date()).toLocaleString('en-US')
    }



    post(){
        this.sb.open("Message Posted!", 'close', { duration: 5000 });
        this.webService.postMessage(this.message);
    }

}