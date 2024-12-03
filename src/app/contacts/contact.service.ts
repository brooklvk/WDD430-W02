import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[] = [];
  contactSelectedEvent = new EventEmitter<Contact>(); 
  contactChangedEvent = new EventEmitter<Contact[]>();
  contactListChangedEvent = new Subject<Contact[]>();

  maxContactId : number;

  constructor() { 
    this.contacts = MOCKCONTACTS;
    this.maxContactId = this.getMaxId();
  }

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

  getMaxId(): number {

    var maxId = 0;

    for (const contact of this.contacts) {
      var currentId = parseInt(contact.id);
      
      if (currentId > maxId)
        maxId = currentId;
    }
    return maxId;
  }

  addContact(newContact: Contact) {
    if (!newContact) {
      return;
    }

    this.maxContactId++;

    newContact.id = this.maxContactId.toString();

    this.contacts.push(newContact);
    const contactsClone: Contact[] = this.contacts.slice();

    this.contactListChangedEvent.next(contactsClone);
  }

  updateContact(originalContact: Contact, newContact: Contact) {
    if (!originalContact || !newContact)
        return;

    const pos = this.contacts.indexOf(originalContact);

    if (pos < 0)
        return;

    newContact.id = originalContact.id;
    this.contacts[pos] = newContact;
    const contactsClone : Contact[] = this.contacts.slice();
    this.contactListChangedEvent.next(contactsClone);
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
