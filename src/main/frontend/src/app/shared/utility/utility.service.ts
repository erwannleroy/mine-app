import {Bassin} from '../models/Bassin';
import {Mine} from '../models/Mine';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class UtilityService {

  private subjectMine = new Subject<Mine>();
  private subjectBassin = new Subject<Bassin>();
  private subjectVisite = new Subject<Boolean>();

  constructor() {
   
  }

  selectMine(mine: Mine) {
    this.subjectMine.next(mine);
    this.subjectBassin.next();
  }

  nouvelleVisite() {
    this.subjectVisite.next(true);
  }

  isVisite(): Observable<Boolean> {
    return this.subjectVisite.asObservable();
  }

  getSelectedMine(): Observable<Mine> {
    return this.subjectMine.asObservable();
  }

  selectBassin(bassin: Bassin) {
    this.subjectBassin.next(bassin);
  }

  getSelectedBassin(): Observable<Bassin> {
    return this.subjectBassin.asObservable();
  }

}
