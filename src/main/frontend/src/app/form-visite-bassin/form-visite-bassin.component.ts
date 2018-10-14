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
  _couleurEauBassin: string;
  _couleurEauEntree: string;
  _ecoulementEntree: boolean;
  _couleurEauSortie: string;
  _ecoulementSortie: boolean;
  _typeIntervention: string;

  couleurs = ["Chargée", "Claire", "Rouge"];
  types = ["Vidange", "Récurrage", "Bouchage renard"];

  constructor(private baseService: BaseService) {
  }

  ngOnInit() {
  }

  model2gui() {
    //console.log("model2gui : ", this._mine);
    if (this._mine) {
      this.baseService.selectVisiteMine(this._mine).then(data => {
        let vmDAO: Array<VisiteMineDAO> = data;
        let visiteMines = this.baseService.convertVisitesMines(vmDAO);
        //console.log("résultat de la requete", data);

        if (visiteMines.length == 1) {
          let vm: VisiteMine = visiteMines[0];

          let vb: VisiteBassin = this.findVisiteBassin(vm);

          if (!vb) {
            //console.log("model2gui vb pas trouve");
            this._enEau = false;
            this._couleurEauBassin = "";
            this._couleurEauEntree = "";
            this._ecoulementEntree = false;
            this._couleurEauSortie = "";
            this._ecoulementSortie = false;
            this._typeIntervention = "";
          } else {
            //console.log("model2gui vb trouve", vb);
            this._enEau = vb.enEau;
            this._couleurEauBassin = vb.couleurEauBassin;
            this._couleurEauEntree = vb.couleurEauEntree;
            this._ecoulementEntree = vb.ecoulementEntree;
            this._couleurEauSortie = vb.couleurEauSortie;
            this._ecoulementSortie = vb.ecoulementSortie;
            this._typeIntervention = vb.typeIntervention;
          }
        }
      });
    }
  }

  private findVisiteBassin(vm: VisiteMine) {
    //console.log("findVisiteBassin", vm);
    let trouve: boolean = false;
    let i: number = 0;
    let vb = null;
    if (vm && vm.visitesBassins && this._bassin) {
      while (!trouve && i < vm.visitesBassins.length) {
        console.log("parcours de visitebassin", vm.visitesBassins[i]);
        ////console.log("Comparaison de "+vm.visitesBassins[i].bassin.nom+" et "+this.bassin.nom);
        trouve = vm.visitesBassins[i].bassin.id == this._bassin.id;
        if (trouve) {
          vb = vm.visitesBassins[i];
        }
        i++;
      }
    }
    //console.log("findVisiteBassin", vb);
    return vb;
  }

  get bassin(): Bassin {
    // transform value for display
    return this._bassin;
  }

  @Input()
  set bassin(b: Bassin) {
    //console.log('previous bassin: ', this._bassin);
    //console.log('current bassin: ', b);
    this._bassin = b;
    this.model2gui();
  }

  get mine(): Mine {
    // transform value for display
    return this._mine;
  }

  @Input()
  set mine(m: Mine) {
    //console.log('previous mine: ', this._mine);
    //console.log('current mine: ', m);
    this._mine = m;
    this.model2gui();
  }


  get enEau() {
    return this._enEau;
  }

  set enEau(b: boolean) {
    //console.log("set en eau", b);
    this._enEau = b;
    this.gui2model();
  }


  get couleurEauBassin() {
    return this._couleurEauBassin;
  }

  set couleurEauBassin(c: string) {
    //console.log("set couleur bassin", c);
    this._couleurEauBassin = c;
    this.gui2model();
  }

  get couleurEauEntree() {
    return this._couleurEauEntree;
  }

  set couleurEauEntree(c: string) {
    //console.log("set couleur eau entrée", c);
    this._couleurEauEntree = c;
    this.gui2model();
  }

  get couleurEauSortie() {
    return this._couleurEauSortie;
  }

  set couleurEauSortie(c: string) {
    //console.log("set couleur eau sortie", c);
    this._couleurEauSortie = c;
    this.gui2model();
  }


  get ecoulementEntree() {
    return this._ecoulementEntree;
  }

  set ecoulementEntree(b: boolean) {
    //console.log("set ecoulement entrée", b);
    this._ecoulementEntree = b;
    this.gui2model();
  }

  get ecoulementSortie() {
    return this._ecoulementSortie;
  }

  set ecoulementSortie(b: boolean) {
    //console.log("set ecoulement sortie", b);
    this._ecoulementSortie = b;
    this.gui2model();
  }

  get typeIntervention() {
    return this._typeIntervention;
  }

  set typeIntervention(t: string) {
    //console.log("set type intervention", t);
    this._typeIntervention = t;
    this.gui2model();
  }

  gui2model() {
    //console.log("avant gui2model");
    if (this.mine) {
      this.baseService.selectVisiteMine(this.mine).then(data => {
        let vmDAO: Array<VisiteMineDAO> = data;
        let visiteMines = this.baseService.convertVisitesMines(vmDAO);
        //console.log("résultat de la requete", data);


        if (visiteMines.length == 1) {
          let vm = visiteMines[0];

          let vb: VisiteBassin = this.findVisiteBassin(vm);

          if (!vb) {
            //console.log("vb non trouve");
            vb = new VisiteBassin();
            if (!vm.visitesBassins) {
              vm.visitesBassins = [];
            }
            vm.visitesBassins.push(vb);
          }

          vb.bassin = this._bassin;
          vb.enEau = this._enEau;
          vb.couleurEauBassin = this._couleurEauBassin;
          vb.couleurEauEntree = this._couleurEauEntree;
          vb.ecoulementEntree = this._ecoulementEntree;
          vb.couleurEauSortie = this._couleurEauSortie;
          vb.ecoulementSortie = this._ecoulementSortie;
          vb.typeIntervention = this._typeIntervention;

          this.baseService.updateVisiteMine(this.mine, vm);
        }
        else {
          //console.log("oups ...");
        }
      }
      );
    }
    //console.log("apres gui2model");
  }


}
