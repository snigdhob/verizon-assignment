import { Component, OnInit } from '@angular/core';
import { Route3Service } from '../services/route3.service';

@Component({
  selector: 'app-route3sub1',
  templateUrl: './route3sub1.component.html',
  styleUrls: ['./route3sub1.component.scss']
})
export class Route3sub1Component implements OnInit {
  timerCount: string = '';

  constructor(private _route3Service: Route3Service) { }

  ngOnInit(): void {
    this._route3Service.timerSubject.subscribe(x => {
      this.timerCount = String(x);
      if(x === 0){
        this.timerCount = '';
      }
    });
  }

}
