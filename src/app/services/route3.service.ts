import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Route3Service {

  timerSubject : Subject<number> = new Subject<number>();
  startPauseSubject: Subject<string> = new Subject<string>();

  constructor() { }
}
