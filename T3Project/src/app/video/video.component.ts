import { Component, OnInit } from '@angular/core';
import { Course } from 'src/course_data';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  Course = Course;
  text= "";
  constructor() {
   
    this.text = `<iframe width="100%" height="100%" src="${this.Course[0].video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    
  }

  ngOnInit(): void {
    
    (document.getElementById("demo") as HTMLElement).innerHTML = this.text;
  }

}
