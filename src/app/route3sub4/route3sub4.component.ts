import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Route3Service } from '../services/route3.service';

@Component({
  selector: 'app-route3sub4',
  templateUrl: './route3sub4.component.html',
  styleUrls: ['./route3sub4.component.scss']
})
export class Route3sub4Component implements OnInit, OnDestroy {
  start: number = 0
  pause: number = 0;
  notifier = new Subject();

  constructor(private _route3Service: Route3Service) { }

  ngOnInit(): void {
    this._route3Service.startPauseSubject
    .pipe(takeUntil(this.notifier))
    .subscribe(
      x => {
        if (x === 'Started') {
          this.start += 1;
        }
        else {
          this.pause += 1;
        }
      }
    )
  }

  ngOnDestroy(){
    this.notifier.next();
    this.notifier.complete();
  }

}
