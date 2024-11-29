import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = [];

  constructor() { 
    this.contacts = MOCKCONTACTS;
  }

  contactSelectedEvent = new EventEmitter<Contact>(); 
  contactChangedEvent = new EventEmitter<Contact[]>();

  getContacts(): Contact[] {
    return this.contacts;
  }

  getContact(id: string): Contact {
    // find id that matches from the list of contacts 
    for (const contact of this.contacts) {
      if (contact.id == id)
        return contact;
    }
    throw new Error(`Contact with id ${id} not found`);
  }

  deleteContact(contact: Contact) {
    if (!contact) {
      return;
   }
   const pos = this.contacts.indexOf(contact);
   if (pos < 0) {
      return;
   }
   this.contacts.splice(pos, 1);
   this.contactChangedEvent.emit(this.contacts.slice());
  }
}
