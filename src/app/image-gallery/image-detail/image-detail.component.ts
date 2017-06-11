import { Component, OnInit } from '@angular/core';
import { ImageGalleryService } from '../image-gallery.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit {

  image: any;

  constructor(title: Title, private imageService: ImageGalleryService,
    private route: ActivatedRoute) { 
          title.setTitle('Image Detail');
    }

  ngOnInit(){
    this.image = this.imageService.getImage(
      +this.route.snapshot.params['id']
    )

    console.log(this.image);
  }

}
