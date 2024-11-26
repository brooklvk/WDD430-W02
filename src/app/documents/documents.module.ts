import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentItemComponent } from './document-item/document-item.component';
import { DocumentEditComponent } from './document-edit/document-edit.component';
import { RouterModule } from '@angular/router'; 

@NgModule({
  declarations: [
    DocumentItemComponent,
    DocumentEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DocumentItemComponent
  ]
})
export class DocumentsModule { } 