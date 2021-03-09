import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Route3Service } from '../services/route3.service';

@Component({
  selector: 'app-route4sub2',
  templateUrl: './route4sub2.component.html',
  styleUrls: ['./route4sub2.component.scss']
})
export class Route4sub2Component implements OnInit {

  buttonState: number = 1;
  timerLimit: string = '';
  currentTimer: number = 0;
  notifier = new Subject();
  pauseLog: number [] = [];
  @Output() timerEvent = new EventEmitter<number>();
  @Output() startPauseEvent = new EventEmitter<string>();

  constructor(private _route3Service: Route3Service) { }

  ngOnInit(): void {
  }

  onClickStartPause() {
    if (this.buttonState === 1) {

      if (!this.currentTimer) {
        this.currentTimer = Number(this.timerLimit);
      }
      let obs = interval(1000);
      let subscription = obs.
        pipe(
          takeUntil(this.notifier)
        ).subscribe(x => {
          // this._route3Service.timerSubject.next(this.currentTimer);
          this.timerEvent.emit(this.currentTimer);

          if (this.currentTimer === 0) {
            this.buttonState = 1;
            this.notifier.next();
            // subscription.unsubscribe();
          }
          else {
            this.currentTimer -= 1;
          }
        });
      // this._route3Service.startPauseSubject.next('Started');
      this.startPauseEvent.emit('Started');
    }
    else {
      this.notifier.next();
      this.pauseLog.push(this.currentTimer+1);
      // this._route3Service.startPauseSubject.next('Paused');
      this.startPauseEvent.emit('Paused');
      // this.notifier.complete();
    }
    this.buttonState *= -1;
  }

  onClickReset(){
    this.notifier.next();
    this.timerLimit = '';
    this.currentTimer = 0;
    this.buttonState = 1;
    // this._route3Service.timerSubject.next(this.currentTimer);
    this.timerEvent.emit(this.currentTimer);
  }

  ngOnDestroy(){
    this.notifier.next();
    this.notifier.complete();
  }

}
