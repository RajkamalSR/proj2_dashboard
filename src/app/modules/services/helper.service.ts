import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HelperService {
  //public docPanelOptions: { navBar?: Boolean, tableBar?: Boolean , rightBar?:Boolean};
  private _docPanelOptions = new Subject<{ navBar?: Boolean, tableBar?: Boolean, rightBar?:Boolean }>();

  constructor() { }

  
}
