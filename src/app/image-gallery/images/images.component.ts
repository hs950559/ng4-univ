import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ImageGalleryService } from '../image-gallery.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnChanges {

  @Input() images: any[];
  @Input() filterBy? = 'all';
  visibleImages: any[] = [];

  constructor(private imageService: ImageGalleryService) {
    console.log(this.filterBy)
    this.visibleImages = this.imageService.getImages();
  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }

}
