import { Component, OnInit } from '@angular/core';
import { Course } from 'src/course_data';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit {
  Course = Course;
  constructor() { }

  ngOnInit(): void {
  }

}
