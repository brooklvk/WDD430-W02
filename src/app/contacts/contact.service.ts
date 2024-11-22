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

  getContacts(): Contact[] {
    return this.contacts;
  }

  getContact(id: string): Contact | null {
    // find id that matches from the list of contacts 
    for (const contact of this.contacts) {
      if (contact.id == id)
        return contact;
    }
    return null;
   } 
}
