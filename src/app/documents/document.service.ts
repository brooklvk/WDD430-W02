import { Injectable, EventEmitter } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  documents : Document[] = [];
  documentChangedEvent = new EventEmitter<Document[]>();

  constructor() { 
    this.documents = MOCKDOCUMENTS;
  }

  documentSelectedEvent = new EventEmitter<Document>();

  getDocuments(): Document[] {
    return this.documents;
  }

  getDocument(id: string): Document {
    // find id that matches from the list of docs
    for (const document of this.documents) {
      if (document.id == id)
        return document;
    }
    throw new Error(`Document with id ${id} not found`); // Throw an error if not found
  }
  
  deleteDocument(document: Document) {
    if (!document) {
       return;
    }
    const pos = this.documents.indexOf(document);
    if (pos < 0) {
       return;
    }
    this.documents.splice(pos, 1);
    this.documentChangedEvent.emit(this.documents.slice());
 }
 
}
