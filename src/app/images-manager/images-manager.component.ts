import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  moduleId: module.id,
  selector: 'app-images-manager',
  templateUrl: 'images-manager.component.html',
  styleUrls: ['images-manager.component.css']
})
export class ImagesManagerComponent implements OnInit, DoCheck {
  @Input() images: string[];
  @Output() imagesChange = new EventEmitter();

  ngDoCheck() {
    this.imagesChange.next(this.images);
  }

  addNewImage(files) {
    if (files && files.length > 0) {
      const images = this.images;
      const file: File = files[0];
      const myReader: FileReader = new FileReader();
      myReader.onloadend = (e) => {
        console.log(myReader.result);
        images.push(myReader.result);
      };
      myReader.readAsDataURL(file);
    }
  }

  ngOnInit() {
  }
}
