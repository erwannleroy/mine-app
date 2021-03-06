import { Component, OnInit, Input } from '@angular/core';
import { Mine } from '../shared/models/Mine';
import { Bassin } from '../shared/models/Bassin';
import { BaseService } from '../shared';
import { VisiteMineDAO } from '../shared/models/VisiteMineDAO';
import { VisiteMine } from '../shared/models/VisiteMine';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-form-visite-mine',
  templateUrl: './form-visite-mine.component.html',
  styleUrls: ['./form-visite-mine.component.scss']
})
export class FormVisiteMineComponent implements OnInit {

  _mine: Mine;
  bassin: Bassin;
  _date: Date;
  _operateur: string;
  _meteo: string;
  _pluviometrie: number;
  _contexte: string;

  constructor(private baseService: BaseService, private utilityService: UtilityService) { 
  }

  ngOnInit() {
  }

  get mine(): Mine {
    // transform value for display
    return this._mine;
  }

  @Input()
  set mine(m: Mine) {
    //console.log('form previous mine: ', this._mine);
    //console.log('form current mine: ', m);
    this._mine = m;
    this.model2gui();
  }

  displayDetail(b: Bassin) {
    //console.log("display visite bassin : ", b.id);
    this.bassin = b;
  }

  onSelectBassin(b: Bassin): void {
    //console.log("notify bassin ", b);
    this.bassin = b;
  }

  get meteo() {
    return this._meteo;
  }

  set meteo(c: string) {
    //console.log("set meteo");
    this._meteo = c;
    this.gui2model();
  }

  get contexte() {
    return this._contexte;
  }

  set contexte(c: string) {
    //console.log("set contexte");
    this._contexte = c;
    this.gui2model();
  }

  get pluviometrie() {
    return this._pluviometrie;
  }

  set pluviometrie(c: number) {
    //console.log("set pluviometrie");
    this._pluviometrie = c;
    this.gui2model();
  }
  get operateur() {
    return this._operateur;
  }

  set operateur(c: string) {
    //console.log("set operateur", c);
    this._operateur = c;
    this.gui2model();
  }

  get date() {
    return this._date;
  }

  set date(c: Date) {
    //console.log("set date");
    this._date = c;
    this.gui2model();
  }

  model2gui() {
    console.log("avant model2gui");
    this.baseService.getVisiteMine(this.mine.nom).then(data => {
     console.log("get VM", data);
      if (data) {
        let vmDAO: VisiteMineDAO = data;
        console.log("model2gui avant convert", vmDAO);
        let vm:VisiteMine = this.baseService.convertVisiteMine(vmDAO);
        console.log("model2gui apres convert", vm);
        this._meteo = vm.meteo;
        this._date = vm.dateVisite;
        this._operateur = vm.operateur;
        this._pluviometrie = vm.pluviometrie;
        this._contexte = vm.contexte;

      } else {
        this._meteo = "";
        this._date = new Date();
        this._operateur = "";
        this._pluviometrie = 0;
        this._contexte = "";
        //console.log("oups ...");
      }
    });
  }

  gui2model() {
    console.log("avant gui2model");
    if (this.mine) {
      let vm = this.utilityService.getSelectedVisiteMine();
      console.log(vm);
      vm.meteo = this._meteo;
      vm.dateVisite = this._date;
      vm.operateur = this._operateur;
      vm.pluviometrie = this._pluviometrie;
      vm.contexte = this._contexte;

      this.baseService.updateVisiteMine(this.mine, vm);
    }
  }
}
