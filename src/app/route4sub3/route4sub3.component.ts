import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-route4sub3',
  templateUrl: './route4sub3.component.html',
  styleUrls: ['./route4sub3.component.scss']
})
export class Route4sub3Component implements OnInit, OnChanges {

  @Input() startPause: string = '';
  log: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    if(this.startPause){
      this.log.push(`${this.startPause} at ${new Date()}`);
    }
  }

}
