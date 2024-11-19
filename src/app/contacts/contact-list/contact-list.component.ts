import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Contact } from '../contact.model'; 

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent {
  contacts: Contact[] = [];
  @Output() selectedContactEvent = new EventEmitter<Contact>();

  constructor() {}

  ngOnInit() {
    this.contacts = [
      new Contact(
        1,
        "R. Kent Jackson",
        "jacksonk@byui.edu",
        2084963771,
        "../../assets/images/jacksonk.jpg",
        []
      ),
      new Contact(
        2,
        "Rex Barzee",
        "barzeer@byui.edu",
        2084963768,
        "../../assets/images/barzeer.jpg",
        []
      )
    ];
  }

  onSelected(contact: Contact) {
    this.selectedContactEvent.emit(contact);
  }
}
