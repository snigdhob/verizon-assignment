import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route4',
  templateUrl: './route4.component.html',
  styleUrls: ['./route4.component.scss']
})
export class Route4Component implements OnInit {

  timerCount: number = 0;
  startPauseList: {event: string, time: Date}[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onTimerChange(value: number){
    this.timerCount = value;
  }

  onStartPauseEvent(value: string){
    this.startPauseList.push({ event:value, time: new Date()});
    this.startPauseList = this.startPauseList.slice();
  }

}
