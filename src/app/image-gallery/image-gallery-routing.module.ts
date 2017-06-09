import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageGalleryComponent } from './image-gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [
  {
    path: '',
    component: ImageGalleryComponent,
    children: [
      {
        path: '',
        component: ImagesComponent
      },
      {
        path: ':id',
        component: ImageDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageGalleryRoutingModule { }
