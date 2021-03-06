import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

constructor(meta: Meta, title: Title) {

    title.setTitle('My Home Page');

    meta.addTags([
      { name: 'author',   content: 'Hemant'},
      { name: 'keywords', content: 'angular seo, angular 4 universal, Angular CLI'},
      { name: 'description', content: 'This is my Angular SEO-based App, enjoy it!' }
    ]);

  }

  ngOnInit() {
  }

}
