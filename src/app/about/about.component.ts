import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

constructor(meta: Meta, title: Title) {

    title.setTitle('My About Page');

    meta.addTags([
      { name: 'author',   content: 'Hemant'},
      { name: 'keywords', content: 'angular seo, angular 4 universal, Angular CLI'},
      { name: 'description', content: 'This is my Angular SEO-based App, enjoy it!' }
    ]);

  }

  ngOnInit() {
  }

}
