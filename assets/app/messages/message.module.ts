import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MessageInputComponent } from './message-input.component';
import { MessageListComponent } from './message-list.component';
import { MessageComponent } from './message.component';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages.component';

@NgModule({
    declarations: [
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        MessageService
    ]
})
export class MessageModule {

}