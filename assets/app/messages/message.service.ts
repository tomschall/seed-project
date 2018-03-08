import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Message } from './message.model';

@Injectable()
export class MessageService {
    private messages: Message[] = [];

    constructor(private http: Http) {}

    addMessage(message: Message) {
        this.messages.push(message);
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/message', body, {headers: headers}) 
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getMessages() {
        // I don't send here any data so i don't have to set a content type and also need no body
        return this.http.get('http://localhost:3000/message')
            .map((response: Response) => {
                const messages = response.json().obj;
                let transformedMessages: Message[] = [];
                for (let message of messages) {
                    transformedMessages.push(new Message(message.content, 'Dummy', message.id, null));
                }
                this.messages = transformedMessages;
                return transformedMessages;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}