import { Component, OnInit } from '@angular/core';
import { MainDescription } from 'src/course_data';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit {
  MainDescription = MainDescription;
  constructor() { }

  ngOnInit(): void {
  }

}
