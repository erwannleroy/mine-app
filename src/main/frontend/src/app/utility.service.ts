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
 
  private text: String;
  private textS = new Subject<String>();
  private mineGestion: Mine;
  private mineVisite: Mine;
  private bassinGestion: VisiteBassin;
  private vmGestion: VisiteMine;
  private vmVisite: VisiteMine;
  private bassinVisite: Bassin;

  private mineGestionS = new Subject<Mine>();
  private mineVisiteS = new Subject<Mine>();
  private bassinGestionS = new Subject<VisiteBassin>();
  private vmGestionS = new Subject<VisiteMine>();
  private vmVisiteS = new Subject<VisiteMine>();
  private bassinVisiteS = new Subject<Bassin>();

  constructor(public router: Router) {
  }


  log(text) {
    this.text = text;
    this.textS.next(this.text);
  }

  observeLog(): Observable<String>{
    return this.textS;
  }

  setVisiteMine(vm: VisiteMine): any {
    this.vmGestion = vm;
    this.vmGestionS.next(vm);
  }

  setSelectedVisiteMine(vm: VisiteMine): any {
    console.log("setSelectedVisiteMine");
    console.log(vm);
    if (this.router.url == '/gestionbassin') {
      this.vmGestion = vm;
      this.vmGestionS.next(vm);
    } else if (this.router.url == '/visite') {
      this.vmVisite = vm;
      this.vmVisiteS.next(vm);
    }
  }

  observeSelectedVisiteMine(): Observable<VisiteMine> {
    if (this.router.url == '/gestionbassin') {
      return this.vmGestionS.asObservable();
    } else if (this.router.url == '/visite') {
      return this.vmVisiteS.asObservable();
    }
  }

  getSelectedVisiteMine(): VisiteMine {
    if (this.router.url == '/gestionbassin') {
      console.log("route gestionbassin");
      return this.vmGestion;
    } else if (this.router.url == '/visite') {
      console.log("route visite");
      return this.vmVisite;
    }
  }

  observeSelectedMine(): Observable<Mine> {
    if (this.router.url == '/gestionbassin') {
      return this.mineGestionS.asObservable();
    } else if (this.router.url == '/visite') {
      return this.mineVisiteS.asObservable();
    }
  }

  getSelectedMine(): Mine {
    if (this.router.url == '/gestionbassin') {
      return this.mineGestion;
    } else if (this.router.url == '/visite') {
      return this.mineVisite;
    }
  }

  setSelectedMine(m: Mine) {
    if (this.router.url == '/gestionbassin') {
      this.mineGestion = m;
      this.mineGestionS.next(m);
    } else if (this.router.url == '/visite') {
      this.mineVisite = m;
      this.mineVisiteS.next(m);
    }
  }

  observeSelectedBassin(): Observable<Bassin> {
     if (this.router.url == '/visite') {
      return this.bassinVisiteS.asObservable();
    }
  }

  getSelectedBassin(): Bassin {
     if (this.router.url == '/visite') {
      return this.bassinVisite;
    }
  }

  setSelectedBassin(b: Bassin) {
     if (this.router.url == '/visite') {
      this.bassinVisite = b;
      this.bassinVisiteS.next(b);
    }
  }

  
  observeSelectedVisiteBassin(): Observable<VisiteBassin> {
    if (this.router.url == '/gestionbassin') {
      return this.bassinGestionS.asObservable();
    } 
  }

  getSelectedVisiteBassin(): VisiteBassin {
    if (this.router.url == '/gestionbassin') {
      return this.bassinGestion;
    } 
  }

  setSelectedVisiteBassin(vb: VisiteBassin) {
    if (this.router.url == '/gestionbassin') {
      this.bassinGestion = vb;
      this.bassinGestionS.next(vb);
    } 
  }
}

