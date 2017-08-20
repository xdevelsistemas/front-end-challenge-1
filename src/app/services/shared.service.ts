import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class SharedService {
  // Observable string sources
  private cityChanged = new Subject<string>();

  // Observable string streams
  cityChanged$ = this.cityChanged.asObservable();

  // Service message commands
  publishData(data: any) {
    this.cityChanged.next(data);
  }
}
