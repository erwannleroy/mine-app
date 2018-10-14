import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Mine } from './shared/models/Mine';
import { Router } from '@angular/router';
import { Bassin } from './shared/models/Bassin';
import { VisiteBassin } from './shared/models/VisiteBassin';
import { VisiteMine } from './shared/models/VisiteMine';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

 


  private mineGestion = new Subject<Mine>();
  private mineVisite = new Subject<Mine>();
  private bassinGestion = new Subject<VisiteBassin>();
  private vmGestion = new Subject<VisiteMine>();
  private bassinVisite = new Subject<Bassin>();

  constructor(public router: Router) {
  }


  setSelectedVisiteBassin(vb: VisiteBassin): any {
    this.bassinGestion.next(vb);
  }

  getSelectedVisiteBassin(): Observable<VisiteBassin> {
    return this.bassinGestion.asObservable();
  }

  setVisiteMine(vm: VisiteMine): any {
    this.vmGestion.next(vm);
  }

  getSelectedVisiteMine(): Observable<VisiteMine> {
    return this.vmGestion.asObservable();
  }

  getSelectedMine(): Observable<Mine> {
    if (this.router.url == '/gestionbassin') {
      return this.mineGestion.asObservable();
    } else if (this.router.url == '/visite') {
      return this.mineVisite.asObservable();
    }

  }

  setSelectedMine(m: Mine) {
    if (this.router.url == '/gestionbassin') {
      this.mineGestion.next(m);
    } else if (this.router.url == '/visite') {
      this.mineVisite.next(m);
    }
  }

  getSelectedBassin(): Observable<Bassin> {
    if (this.router.url == '/gestionbassin') {
      return this.bassinVisite.asObservable();
    } else if (this.router.url == '/visite') {
      return this.bassinVisite.asObservable();
    }
  }

  setSelectedBassin(b: Bassin) {
    if (this.router.url == '/gestionbassin') {
      this.bassinVisite.next(b);
    }
  }
}
