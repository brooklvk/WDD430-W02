import { Component, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();
  
  documents: Document[] = [
    new Document(
      '01',
      'Rusty',
      'a red haired poodle',
      'url',
      []
    ),
    new Document(
      '02',
      'Roxie',
      'a gray haired chihuahua',
      'url',
      []
    ),
    new Document(
      '03',
      'Rosie',
      'another red toy poodle',
      'url',
      []
    ),
    new Document(
      '04',
      'Raspberry',
      'the cutest poodle puppy',
      'url',
      []
    )
  ];

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
