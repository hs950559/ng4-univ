import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ImageGalleryService } from '../image-gallery.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnChanges {

  @Input() images: any[];
  @Input() filterBy? = 'all';
  visibleImages: any[] = [];

  constructor(title: Title, private imageService: ImageGalleryService) {
    title.setTitle('Images');
    this.visibleImages = this.imageService.getImages();
  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }

}
