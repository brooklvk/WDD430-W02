import { NgModule } from '@angular/core';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ContactItemComponent
  ],
  exports: [
    ContactItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactsModule { } 