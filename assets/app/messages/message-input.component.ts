import { Message } from './message.model';
import { MessageService } from './message.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent {
    constructor(private messageService: MessageService) {}

    onSubmit(form: NgForm) {
        this.messageService.addMessage(new Message(form.value.content, 'Tom'))
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            );
        form.resetForm();
    }

}