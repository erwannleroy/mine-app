import { Injectable } from '@angular/core';
//import { JsStoreService } from '../jsstore/jsstore.service';
import { Mine } from '../models/Mine';
import { MineDAO } from '../models/MineDAO';

//import * as workerPath from 'file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js';
import { VisiteMine } from '../models/VisiteMine';
import { VisiteMineDAO } from '../models/VisiteMineDAO';
import { validateStyleParams } from '@angular/animations/browser/src/util';
import { Bassin } from '../models/Bassin';
import { UtilityService } from '../../utility.service';
import { DexieService } from 'ngx-dexie';
import { Dexie } from 'dexie';


@Injectable({
  providedIn: 'root'
})
export class BaseService {
  
  deleteVisiteMine(vm: VisiteMine): any {
    this.dexieService.deleteOne("visites", vm.nomMine);
  }

  DB_NAME = 'MINESOFT-DEXIE';


  constructor(private utilityService: UtilityService, private dexieService: DexieService) {
    // turn on jsstore log status - help you to debug
    // off it in production or when you dont need
    // this.getConnection();
  }





  getMines(): Dexie.Promise<MineDAO[]> {
    return this.dexieService.toArray("mines");
  }

  getVisitesMines(): Dexie.Promise<VisiteMineDAO[]> {
    // var vp: Promise<VisiteMineDAO[]> = this.getConnection().select({
    //   from: 'VISITE_MINE'
    // });
    // return vp;
    return this.dexieService.toArray("visites");
  }

  convertMines(minesDAO: Array<MineDAO>): Array<Mine> {
    var mines: Array<Mine> = [];
    //console.log("avant convertMines");

    for (let m of minesDAO) {
      //console.log(m);
      //console.log("item " + m.key);
      //          //console.log(m.content.replace("^\"|\"$", ""));
      //          var mine:Mine = m.content;
      //          mines[0]=m.content;
      var mine = <Mine>JSON.parse(m.content);
      mines.push(mine);
    }

    //console.log(mines);
    //console.log("apres convertMines");
    return mines;
  }

  convertVisitesMines(vmsDAO: Array<VisiteMineDAO>): Array<VisiteMine> {
    var vms: Array<VisiteMine> = [];
    //console.log("avant convertVisitesMines");

    for (let vm of vmsDAO) {
      //console.log(vm);
      //console.log("item " + vm.key);
      //          //console.log(m.content.replace("^\"|\"$", ""));
      //          var mine:Mine = m.content;
      //          mines[0]=m.content;
      //console.log("ajoute au résultat la mine ", vm);
      var vmDTO = <VisiteMine>JSON.parse(vm.content);
      //console.log("ajoute au résultat la mine DTO ", vmDTO);
      vms.push(vmDTO);
    }

    //console.log(vms);
    //console.log("apres convertVisitesMines");
    return vms;
  }

  convertVisiteMine(vmDAO: VisiteMineDAO): VisiteMine {
    console.log("convertVisiteMine");
    console.log(vmDAO);
    var vm: VisiteMine;

    var vmDTO = <VisiteMine>JSON.parse(vmDAO.content);
    console.log("apres convert", vmDTO);
    return vmDTO;
  }

  deleteMine(key: string) {
    // var nb: Promise<number> = this.getConnection().remove({
    //   from: 'MINE',
    //   where: {key: key}
    // });
    //console.log("nb mine supprimée :" + nb);
  }

  selectMines(name: string): Promise<MineDAO[]> {

    // var minesP: Promise<MineDAO[]> = this.getConnection().select({
    //   from: 'MINE',
    //   where: {
    //     nom: {like: '%' + name + '%'}
    //   }
    // });
    // return minesP;
    //return this.convertMines(minesP);
    return null;
  }

  getMine(key: string): Dexie.Promise<MineDAO> {
    return this.dexieService.getByPrimaryKey("mines", key);
  }

  getVisiteMine(key: string): Dexie.Promise<VisiteMineDAO> {
    return this.dexieService.getByPrimaryKey("visites", key);
  }



  addMine(mine: Mine) {
    var success: boolean;
    this.utilityService.log("add mine : " + mine);
    console.log("add mine : " + mine);
    this.dexieService.addOne("mines", { key: mine.nom, content: JSON.stringify(mine) })
      .then(rowsInserted => {
        this.utilityService.log('rows inserted : ' + rowsInserted);
        console.log('rows inserted : ' + rowsInserted);
        success = rowsInserted == 1;
      }).catch(function (error) {
        this.utilityService.log("Erreur � l'insertion : " + error);
        console.log("Erreur � l'insertion : " + error);
        success = false;
      });
  }

  addVisiteMine(m: Mine, vm: VisiteMine) {
    //console.log("addVisiteMine", m, vm);
    var success: boolean;
    //console.log("add visite mine : " + m);
    this.dexieService.addOne("visites", { key: m.nom, content: JSON.stringify(vm) })
      .then(rowsInserted => {
        //console.log('rows inserted : ' + rowsInserted);
        success = rowsInserted == 1;
      }).catch(function (error) {
        //console.log("Erreur � l'insertion : " + error);
        success = false;
      });
  }



  updateMine(mine: Mine): boolean {
    var success: boolean;
    //console.log("update mine : " + mine);
    // this.getConnection().update({
    //   in: 'MINE',
    //   where: {
    //     key: mine.nom
    //   },
    //   set: {
    //     content: JSON.stringify(mine)
    //   }
    // }).then(rowsUpdated => {
    //   //console.log('rows updated : ' + rowsUpdated);
    //   success = rowsUpdated == 1;
    // }).catch(function (error) {
    //   //console.log("Erreur a l'insertion : " + error);
    //   success = false;
    // });

    return success;
  }

  updateVisiteMine(mine: Mine, vm: VisiteMine): any {
    var success: boolean;

    this.dexieService.update("visites", mine.nom, {content: JSON.stringify(vm)});

    return success;
  }

  existsVisiteForBassin(mine: Mine, bassin: Bassin): any {
    console.log("Recherche de visite pour mine " + mine.nom + " et bassin " + bassin.id);
    // var count: Promise<number> = this.getConnection().count({
    //   from: 'VISITE_MINE',
    //   where: {
    //     key: mine.nom,
    //     content: {
    //       like:'%"'+bassin.id+'"%'
    //     }
    //   }
    // });
    // console.log("existsVisiteForBassin");
    //console.log(count);
    return null;
  }
}
