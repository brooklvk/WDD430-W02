import { Component, Input } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrl: './message-edit.component.css'
})
export class MessageEditComponent {
  @Input() message: Message;

  constructor(public messageService: MessageService) {
    this.message = null!;
  }

  onSendMessage() {
    this.messageService.addMessage(this.message);
  }
}
