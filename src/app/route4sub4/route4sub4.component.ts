import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-route4sub4',
  templateUrl: './route4sub4.component.html',
  styleUrls: ['./route4sub4.component.scss']
})
export class Route4sub4Component implements OnInit, OnChanges {

  @Input() log: {event: string, time: Date}[] = [];
  start: number = 0;
  pause: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    if(this.log?.length > 0){
      if (this.log[this.log.length - 1].event === 'Started') {
        this.start += 1;
      }
      else {
        this.pause += 1;
      }
    }
  }

}
