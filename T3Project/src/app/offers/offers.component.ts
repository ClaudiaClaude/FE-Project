import { Component, OnInit } from '@angular/core';
import { Course } from 'src/course_data';
@Component({
  selector: 'offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  Course = Course;

  constructor() { }

  ngOnInit(): void {
  }

}
