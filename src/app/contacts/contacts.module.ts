import { NgModule } from '@angular/core';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { CommonModule } from '@angular/common';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { RouterModule } from '@angular/router'; 

@NgModule({
  declarations: [
    ContactItemComponent,
    ContactEditComponent
  ],
  exports: [
    ContactItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ContactsModule { } 