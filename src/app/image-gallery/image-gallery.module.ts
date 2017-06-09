import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageGalleryRoutingModule } from './image-gallery-routing.module';
import { ImageGalleryComponent } from './image-gallery.component';
import { ImageGalleryService } from './image-gallery.service';
import { ImageFilterPipe } from './image-filter.pipe';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImagesComponent } from './images/images.component';

@NgModule({
  imports: [
    CommonModule,
    ImageGalleryRoutingModule
  ],
  declarations: [ImageGalleryComponent, ImageFilterPipe, ImageDetailComponent, ImagesComponent],
  providers: [ImageGalleryService]
})
export class ImageGalleryModule { }
