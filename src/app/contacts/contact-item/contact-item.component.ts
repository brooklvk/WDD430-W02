import { Component, Input } from '@angular/core';
import { Contact } from '../../contacts/contact.model';

@Component({
  selector: 'cms-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.css'
})
export class ContactItemComponent {
  @Input() contact: Contact;
  @Input() index: number;

  constructor() {
    this.contact = new Contact('0', '', '', '0000000000', '', []);
    this.index = 0;
  }
}
