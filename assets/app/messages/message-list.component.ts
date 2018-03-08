import { MessageService } from './message.service';
import { Message } from './message.model';
import { Component, Input, OnInit } from "@angular/core";


@Component({
    selector: 'app-message-list',
    templateUrl: './message-list.component.html'
})
export class MessageListComponent implements OnInit {

    messages: Message[];

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.messageService.getMessages()
            .subscribe(
                (message: Message[]) => {
                    this.messages = message;
                }
            );
    }

    changeData(event) {
        this.messages.forEach(element => {
            element.content = event;
        });
    }
}