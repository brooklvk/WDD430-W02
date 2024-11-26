import { Component, OnInit } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { WindRefService } from '../../wind-ref.service';

@Component({
  selector: 'cms-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrl: './document-detail.component.css'
})
export class DocumentDetailComponent implements OnInit {
  document: Document = {} as Document;
  nativeWindow: any;

  constructor(
    private documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute,
    private windRefService: WindRefService
  ) {
    this.nativeWindow = windRefService.getNativeWindow();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.document = this.documentService.getDocument(id);
      console.log('Loaded document:', this.document);
    });

  }

  onView() {
    if (this.document.url) {
      this.nativeWindow.open(this.document.url);
    }
  }

  onDelete() {
    this.documentService.deleteDocument(this.document);
    this.router.navigate(['/documents']);
  }
}
