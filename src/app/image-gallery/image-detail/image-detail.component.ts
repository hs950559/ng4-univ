import { Component, OnInit } from '@angular/core';
import { ImageGalleryService } from '../image-gallery.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit {

  image: any;

  constructor(private imageService: ImageGalleryService,
    private route: ActivatedRoute) { }

  ngOnInit(){
    this.image = this.imageService.getImage(
      +this.route.snapshot.params['id']
    )

    console.log(this.image);
  }

}
