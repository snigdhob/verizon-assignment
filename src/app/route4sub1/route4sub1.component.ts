import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-route4sub1',
  templateUrl: './route4sub1.component.html',
  styleUrls: ['./route4sub1.component.scss']
})
export class Route4sub1Component implements OnInit {

  @Input() timerCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
