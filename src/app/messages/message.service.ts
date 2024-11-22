import { Injectable, EventEmitter } from '@angular/core';
import { Message } from './message.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Message[] = MOCKMESSAGES;

  messageChangedEvent = new EventEmitter<Message[]>();
  messageSelectedEvent = new EventEmitter<Message>();

  constructor() { 
    this.messageChangedEvent.emit(this.messages.slice());
  }

  getMessages(): Message[] {
    return this.messages;
  }

  getMessage(id:string) : Message | null{
    // find id that matches from the list of messages
    for (const message of this.messages) {
      if (message.id == id)
        return message;
    }
    return null;
  } 

  addMessage(message: Message) {
    this.messages.push(message);
    this.messageChangedEvent.emit(this.messages.slice());
  }

}
