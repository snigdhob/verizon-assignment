import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-route4sub4',
  templateUrl: './route4sub4.component.html',
  styleUrls: ['./route4sub4.component.scss']
})
export class Route4sub4Component implements OnInit, OnChanges {

  @Input() startPause: string = '';
  start: number = 0;
  pause: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    if(this.startPause){
      if (this.startPause === 'Started') {
        this.start += 1;
      }
      else {
        this.pause += 1;
      }
    }
  }

}
