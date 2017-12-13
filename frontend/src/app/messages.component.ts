import { Component } from '@angular/core'
import { WebService } from './web.service'
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'messages',
    template: `
    <div *ngFor="let message of webService.messages | async">
        <mat-card color="purple-green" class="card">
            <mat-card-content [routerLink]="['/messages', message.owner]" style="cursor: pointer">
                <font face="verdana" font size ="4">{{message.owner}}</font>
            </mat-card-content>
            <mat-card-content>{{message.text}}</mat-card-content>
            <mat-card-content>{{message.date}}</mat-card-content>
        </mat-card>
    </div>
    `
})
export class MessagesComponent {
    constructor(private webService : WebService, private route: ActivatedRoute) {}

    ngOnInit(){
        var name = this.route.snapshot.params['name'];
        this.webService.getMessages(name);
        this.webService.getUser().subscribe();
    }
}