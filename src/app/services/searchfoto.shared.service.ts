import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class Searchfoto {

  private emitChangeSource = new Subject<any>();

  changeEmitted$ = this.emitChangeSource.asObservable();

  emitChange(change: any) {
      this.emitChangeSource.next(change);
  }
}
