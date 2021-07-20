import { Component, OnInit } from '@angular/core';
import { Course } from 'src/course_data';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent implements OnInit {
  Course = Course;

  constructor() {}

  ngOnInit(): void {}
}
