import { Message } from './message.model';
import { MessageService } from './message.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent {
    constructor(private messageService: MessageService) {

    }

    onSave(value: string) {
        this.messageService.addMessage(new Message(value, 'Tom'));
    }

}