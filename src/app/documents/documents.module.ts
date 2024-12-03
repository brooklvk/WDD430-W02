import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentItemComponent } from './document-item/document-item.component';
import { DocumentEditComponent } from './document-edit/document-edit.component';
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DocumentItemComponent,
    DocumentEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    DocumentItemComponent
  ]
})
export class DocumentsModule { } 