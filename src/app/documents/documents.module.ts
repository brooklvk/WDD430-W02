import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentItemComponent } from './document-item/document-item.component';

@NgModule({
  declarations: [
    DocumentItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DocumentItemComponent
  ]
})
export class DocumentsModule { } 