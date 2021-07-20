import { Component, OnInit } from '@angular/core';
import { News } from 'src/course_data';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news = News;

  constructor() { }

  ngOnInit(): void {
  }

}
