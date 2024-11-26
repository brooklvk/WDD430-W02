import { Injectable, EventEmitter } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  documents : Document[] = [];

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
  
}
