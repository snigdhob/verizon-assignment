import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Route3Service } from '../services/route3.service';

@Component({
  selector: 'app-route3sub3',
  templateUrl: './route3sub3.component.html',
  styleUrls: ['./route3sub3.component.scss']
})
export class Route3sub3Component implements OnInit, OnDestroy {

  log: string[] = [];
  notifier = new Subject();

  constructor(private _route3Service: Route3Service) { }

  ngOnInit(): void {
    this._route3Service.startPauseSubject
    .pipe(takeUntil(this.notifier))
    .subscribe(
      x => this.log.push(`${x} at ${new Date()}`)
    );
  }

  ngOnDestroy(){
    this.notifier.next();
    this.notifier.complete();
  }

}
