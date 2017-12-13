import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Rx'
import { MatSnackBar } from '@angular/material';
import { AuthService } from './auth.service';

@Injectable()
export class WebService {
    LINK = 'http://bringpibackend.azurewebsites.net/api';

    private messageStore = [];

    private messageSubjet = new Subject();
    
    messages = this.messageSubjet.asObservable();

    constructor(private http: Http, private sb: MatSnackBar, private auth: AuthService) {
        this.getMessages('');
    }

    getMessages(user) {
        user = (user) ? '/' + user : '';
        this.http.get(this.LINK + '/messages' + user).subscribe(response => {
            this.messageStore = response.json();
            this.messageSubjet.next(this.messageStore);
        }, error => {
            this.handleError("Unable to get messages");
        });
    }

    async postMessage(message) {
        try {
            var response = await this.http.post(this.LINK + '/messages', message).toPromise();
            this.messageStore.push(response.json());
            this.messageSubjet.next(this.messageStore);
        } catch (error) {
            this.handleError("Unable to post message");
        }

    }

    getUser() {
        return this.http.get(this.LINK + '/users/me', this.auth.tokenHeader).map(res => res.json());
    }
    
    saveUser(userData) {
        return this.http.post(this.LINK + '/users/me', userData,this.auth.tokenHeader).map(res => res.json());
    }

    deleteUser(){
        return this.http.delete(this.LINK + '/users/me',this.auth.tokenHeader).map(res => res.json());
    }

    private handleError(error) {
        console.error(error);
        this.sb.open(error, 'close', { duration: 5000 });
    }
}