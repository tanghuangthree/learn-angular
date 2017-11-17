import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from '_rxjs@5.5.2@rxjs/Subject';

@Injectable()
export class EventBusService {
  public eventBus:Subject<string> = new Subject<string>();
  constructor() { }

}
