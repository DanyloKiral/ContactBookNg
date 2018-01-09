import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {
  @Input()
  imageUrl: string;
  @Output()
  viewerClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.viewerClose.emit();
  }
}
