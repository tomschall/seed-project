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
        this.messages = this.messageService.getMessages();
    }

    changeData(event) {
        this.messages[0].content = event;
        this.messages[1].content = event;
        this.messages[2].content = event;
    }
}