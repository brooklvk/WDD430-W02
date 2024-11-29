import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cms-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})

export class ContactDetailComponent implements OnInit {
  @Input() contact: Contact;
  router: Router;
  route: ActivatedRoute;
  contactService: ContactService;

  constructor(contactService: ContactService, router: Router, route: ActivatedRoute) {
    this.contact = null!;
    this.route = route;
    this.router = router;
    this.contactService = contactService;
  }

  ngOnInit() {
    // Subscribe to the active route to get the id parameter
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.contact = this.contactService.getContact(id); // Fetch the contact using the id
    });
  }

  onDelete() {
    this.contactService.deleteContact(this.contact); 
    this.router.navigate(['/contacts']);
  }
}
