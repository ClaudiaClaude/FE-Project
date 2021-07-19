import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/course_data';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  teachers = Teacher;
  constructor() { }

  ngOnInit(): void {
  }

}
