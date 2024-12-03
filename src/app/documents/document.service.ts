import { Injectable, EventEmitter } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  documents : Document[] = [];
  documentSelectedEvent = new EventEmitter<Document>();
  documentChangedEvent = new EventEmitter<Document[]>();
  documentListChangedEvent = new Subject<Document[]>();

  maxDocumentId : number;

  constructor() { 
    this.documents = MOCKDOCUMENTS;
    this.maxDocumentId = this.getMaxId();
  }

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

  getMaxId(): number {

    var maxId = 0;

    for (const document of this.documents) {
      var currentId = parseInt(document.id);
      
      if (currentId > maxId)
        maxId = currentId;
    }
    return maxId;
  }

  addDocument(newDocument: Document) {
    if (!newDocument) {
      return;
    }

    this.maxDocumentId++;

    newDocument.id = this.maxDocumentId.toString();

    this.documents.push(newDocument);
    const documentsClone: Document[] = this.documents.slice();

    this.documentListChangedEvent.next(documentsClone);
  }

  updateDocument(originalDocument: Document, newDocument: Document) {
    if (!originalDocument || !newDocument)
        return;

    const pos = this.documents.indexOf(originalDocument);

    if (pos < 0)
        return;

    newDocument.id = originalDocument.id;
    this.documents[pos] = newDocument;
    const documentsClone : Document[] = this.documents.slice();
    this.documentListChangedEvent.next(documentsClone);
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
    const documentsClone : Document[] = this.documents.slice();
    this.documentListChangedEvent.next(documentsClone);
 }
 
}
