import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Route3Service } from '../services/route3.service';

@Component({
  selector: 'app-route3sub2',
  templateUrl: './route3sub2.component.html',
  styleUrls: ['./route3sub2.component.scss']
})
export class Route3sub2Component implements OnInit, OnDestroy {

  buttonState: number = 1;
  timerLimit: string = '';
  currentTimer: number = 0;
  notifier = new Subject();
  pauseLog: number[] = [];

  constructor(private _route3Service: Route3Service) { }

  ngOnInit(): void {
  }

  onClickStartPause() {
    if (this.buttonState === 1) {
      if (!this.currentTimer) {
        if (this.timerLimit) {
          this.currentTimer = Number(this.timerLimit);
        }
        else {
          return;
        }
      }
      let obs = interval(1000);
      let subscription = obs.
        pipe(
          takeUntil(this.notifier)
        ).subscribe(x => {
          this._route3Service.timerSubject.next(this.currentTimer);

          if (this.currentTimer === 0) {
            this.buttonState = 1;
            this.notifier.next();
            // subscription.unsubscribe();
          }
          else {
            this.currentTimer -= 1;
          }
        });
      this._route3Service.startPauseSubject.next('Started');
    }
    else {
      this.notifier.next();
      this.pauseLog.push(this.currentTimer + 1);
      this._route3Service.startPauseSubject.next('Paused');
      // this.notifier.complete();
    }
    this.buttonState *= -1;
  }

  onClickReset() {
    this.notifier.next();
    this.timerLimit = '';
    this.currentTimer = 0;
    this.buttonState = 1;
    this._route3Service.timerSubject.next(this.currentTimer);
  }

  ngOnDestroy() {
    this.notifier.next();
    this.notifier.complete();
  }

}
