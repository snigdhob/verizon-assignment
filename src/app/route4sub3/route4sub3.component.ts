import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-route4sub3',
  templateUrl: './route4sub3.component.html',
  styleUrls: ['./route4sub3.component.scss']
})
export class Route4sub3Component implements OnInit, OnChanges {

  @Input() log: {event: string, time: Date}[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
  }

}
