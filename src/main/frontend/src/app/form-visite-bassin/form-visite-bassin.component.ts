import { Component, OnInit, Input } from '@angular/core';
import { Bassin } from '../shared/models/Bassin';
import { VisiteBassin } from '../shared/models/VisiteBassin';
import { Mine } from '../shared/models/Mine';
import { BaseService } from '../shared';
import { VisiteMine } from '../shared/models/VisiteMine';
import { VisiteMineDAO } from "../shared/models/VisiteMineDAO";

@Component({
  selector: 'app-form-visite-bassin',
  templateUrl: './form-visite-bassin.component.html',
  styleUrls: ['./form-visite-bassin.component.scss']
})
export class FormVisiteBassinComponent implements OnInit {

  _bassin: Bassin;
  _mine: Mine;
  _enEau: boolean;
  _couleurBassin: string;
  _couleurEauEntree: string;
  couleurs = ["Chargée", "Claire", "Rouge"];

  constructor(private baseService: BaseService) {
  }

  ngOnInit() {
    this.model2gui();
  }

  model2gui() {
    this.baseService.selectVisiteMine(this.mine).then(data => {
      let vmDAO: Array<VisiteMineDAO> = data;
      let visiteMines = this.baseService.convertVisitesMines(vmDAO);
      console.log("résultat de la requete", data);

      if (visiteMines.length == 1) {
        let vm: VisiteMine = visiteMines[0];

        let vb: VisiteBassin = this.findVisiteBassin(vm);

        if (!vb) {
          console.log("model2gui vb pas trouve");
          this._enEau = false;
          this._couleurBassin = "";
        } else {
          console.log("model2gui vb trouve", vb);
          this._enEau = vb.enEau;
          this._couleurBassin = vb.couleurEauBassin;
        }
      }
    });
  }

  private findVisiteBassin(vm: VisiteMine) {
    let trouve: boolean = false;
    let i: number = 0;
    let vb = null;
    if (vm && vm.visitesBassins) {
      while (!trouve && i < vm.visitesBassins.length) {
        //console.log("Comparaison de "+vm.visitesBassins[i].bassin.nom+" et "+this.bassin.nom);
        trouve = vm.visitesBassins[i].bassin.id == this.bassin.id;
        if (trouve) {
          vb = vm.visitesBassins[i];
        }
        i++;
      }
    }
    console.log("findVisiteBassin", vb);
    return vb;
  }

  get bassin(): Bassin {
    // transform value for display
    return this._bassin;
  }

  @Input()
  set bassin(b: Bassin) {
    console.log('previous bassin: ', this._bassin);
    console.log('current bassin: ', b);
    this._bassin = b;
    this.model2gui();
  }

  get mine(): Mine {
    // transform value for display
    return this._mine;
  }

  @Input()
  set mine(m: Mine) {
    console.log('previous mine: ', this._mine);
    console.log('current mine: ', m);
    this._mine = m;
  }

  get couleurBassin() {
    return this._couleurBassin;
  }

  set couleurBassin(c: string) {
    console.log("set couleur bassin");
    this._couleurBassin = c;
    this.gui2model();
  }

  get couleurEauEntree() {
    return this._couleurEauEntree;
  }

  set couleurEauEntree(c: string) {
    console.log("set couleur eau entree");
    this._couleurEauEntree = c;
    this.gui2model();
  }

  get enEau() {
    return this._enEau;
  }

  set enEau(b: boolean) {
    console.log("set en eau");
    this._enEau = b;
    this.gui2model();
  }

  gui2model() {
    console.log("avant gui2model");
    if (this.mine) {
      this.baseService.selectVisiteMine(this.mine).then(data => {
        let vmDAO: Array<VisiteMineDAO> = data;
        let visiteMines = this.baseService.convertVisitesMines(vmDAO);
        console.log("résultat de la requete", data);


        if (visiteMines.length == 1) {
          let vm = visiteMines[0];

          let vb: VisiteBassin = this.findVisiteBassin(vm);

          if (!vb) {
            console.log("vb non trouve");
            vb = new VisiteBassin();
            if (!vm.visitesBassins) {
              vm.visitesBassins = [];
            }
            vm.visitesBassins.push(vb);
          }

          vb.bassin = this.bassin;
          vb.enEau = this.enEau;
          vb.couleurEauBassin = this.couleurBassin;

          this.baseService.updateVisiteMine(this.mine, vm);
        }
        else {
          console.log("oups ...");
        }
      }
      );
    }


  }


}
