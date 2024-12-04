import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { WindRefService } from '../../wind-ref.service';

@Component({
  selector: 'cms-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrl: './document-edit.component.css'
})
export class DocumentEditComponent implements OnInit {

  originalDocument: Document = {} as Document;
  document: Document = {} as Document;
  editMode: boolean = false;
  nativeWindow: any;

  constructor(
    private documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute,
    private windRefService: WindRefService
  ) {
    this.originalDocument = new Document('', '', '', '', []);
    this.document = new Document('', '', '', '', []);
    this.nativeWindow = windRefService.getNativeWindow();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (!id) {
        this.editMode = false;
        return;
      }
      this.originalDocument = this.documentService.getDocument(id);
      if (!this.originalDocument) {
        return;
      }

      this.editMode = true;
      this.document = JSON.parse(JSON.stringify(this.originalDocument));
      console.log('Loaded document:', this.originalDocument);
    });
  }

  onSubmit(f : NgForm) {
    var title = f.value.title;
    var description = f.value.description;
    var url = f.value.url;
    
    var newDocument = new Document('', title, description, url, []);

   if (this.editMode) {
    this.documentService.updateDocument(this.originalDocument, newDocument);
   }
   else {
    this.documentService.addDocument(newDocument);
   }
  
  this.router.navigate(['/documents']);
  }

  onCancel() {
    this.router.navigate(['/documents']);
  }
}
