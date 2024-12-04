import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { WindRefService } from '../../wind-ref.service';

@Component({
  selector: 'cms-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrl: './contact-edit.component.css'
})
export class ContactEditComponent implements OnInit {

  originalContact: Contact = {} as Contact;
  contact: Contact = {} as Contact;
  groupContacts: Contact[] = [];
  editMode: boolean = false;
  id: string = '';
  nativeWindow: any;

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute,
    private windRefService: WindRefService
  ) {
    this.originalContact = new Contact('', '', '', '', '', []);
    this.contact = new Contact('', '','', '', '', []);
    this.nativeWindow = windRefService.getNativeWindow();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (!id) {
        this.editMode = false;
        return;
      }
      this.originalContact = this.contactService.getContact(id);
      if (!this.originalContact) {
        return;
      }

      this.editMode = true;
      this.contact = JSON.parse(JSON.stringify(this.originalContact));

      if (this.contact.group) {
        this.groupContacts = JSON.parse(JSON.stringify(this.originalContact.group));
      }
      console.log('Loaded contact:', this.originalContact);
    });
  }

  onSubmit(f : NgForm) {
    var name = f.value.name;
    var email = f.value.email;
    var phone = f.value.phone;
    var imageUrl = f.value.imageUrl;
    
    var newContact = new Contact('', name, email, phone, imageUrl, []);

   if (this.editMode) {
    this.contactService.updateContact(this.originalContact, newContact);
   }
   else {
    this.contactService.addContact(newContact);
   }
  
  this.router.navigate(['/contacts']);
  }

  onCancel() {
    this.router.navigate(['/contacts']);
  }
}
