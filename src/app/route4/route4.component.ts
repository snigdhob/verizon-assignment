import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route4',
  templateUrl: './route4.component.html',
  styleUrls: ['./route4.component.scss']
})
export class Route4Component implements OnInit {

  timerCount: number = 0;
  startPause: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onTimerChange(value: number){
    this.timerCount = value;
  }

  onStartPauseEvent(value: string){
    this.startPause = value;
  }

}
