import {Injectable} from '@angular/core';
//import {JsStoreService} from '../jsstore/jsstore.service';
import {Mine} from '../models/Mine';
import {MineDAO} from '../models/MineDAO';
import * as JsStore from 'jsstore';
import {
  IDataBase,
  DATA_TYPE,
  ITable
} from 'jsstore';
import * as workerPath from 'file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js';
import {VisiteMine} from '../models/VisiteMine';
import {VisiteMineDAO} from '../models/VisiteMineDAO';
import { validateStyleParams } from '@angular/animations/browser/src/util';
import { Bassin } from '../models/Bassin';
import { UtilityService } from '../../utility.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService {



  static connexion = new JsStore.Instance(new Worker(workerPath));

  DB_NAME = 'MINESOFT';

  constructor(private utilityService: UtilityService) {
    // turn on jsstore log status - help you to debug
    // off it in production or when you dont need
    BaseService.connexion.setLogStatus(true);
    this.initializeDB();
  }

  //  get connection() {
  //    return JsStoreService.idbCon;
  //  }

  initializeDB() {
    var con = BaseService.connexion;
    var database: IDataBase = this.getDatabase();
    var dbName = this.DB_NAME;

    //console.log(con);
    //console.log('initializeDB exist ? ', con.isDbExist(this.DB_NAME));
    con.isDbExist(this.DB_NAME).then(function (isExist) {
      //console.log("DB exist " + isExist);
      //console.log(con);
      if (!isExist) {
        //console.log('before creation');
        con.createDb(database);
        //console.log('after creation');
      }
      //console.log('before open');
      con.openDb(dbName);
      //console.log('after open');
    });
  }

  private getDatabase() {
    //console.log('enter getDatabase');
    const mineTable: ITable = {
      name: "MINE",
      columns: [{
        name: "key",
        dataType: 'string',
        primaryKey: true
      },
        {
          name: "content",
          dataType: 'string'
        }
      ]
    };

    const visiteMineTable: ITable = {
      name: "VISITE_MINE",
      columns: [{
        name: "key",
        dataType: 'string',
        primaryKey: true
      },
        {
          name: "content",
          dataType: 'string'
        }
      ]
    };

    const database: IDataBase = {
      name: this.DB_NAME,
      tables: [mineTable, visiteMineTable]
    }

    //console.log('enter getDatabase', database);
    return database;
  }


  getMines(): Promise<MineDAO[]> {
    this.utilityService.log("getMines 1");
    var minesP: Promise<MineDAO[]> = BaseService.connexion.select({
      from: 'MINE'
    });
    this.utilityService.log("getMines 2");
    return minesP;
  }

  getVisitesMines(): Promise<VisiteMineDAO[]> {
    var vp: Promise<VisiteMineDAO[]> = BaseService.connexion.select({
      from: 'VISITE_MINE'
    });
    return vp;
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

  deleteMine(key: string) {
    var nb: Promise<number> = BaseService.connexion.remove({
      from: 'MINE',
      where: {key: key}
    });
    //console.log("nb mine supprimée :" + nb);
  }

  selectMines(name: string): Promise<MineDAO[]> {
    var minesP: Promise<MineDAO[]> = BaseService.connexion.select({
      from: 'MINE',
      where: {
        nom: {like: '%' + name + '%'}
      }
    });
    return minesP;
    //return this.convertMines(minesP);
  }

  existsMine(key: string): Promise<number> {
    var count: Promise<number> = BaseService.connexion.count({
      from: 'MINE',
      where: {
        key: key
      }
    });
    //console.log("existsMine");
    //console.log(count);
    return count;
  }

  existsVisiteMine(mine: Mine): Promise<number> {
    var count: Promise<number> = BaseService.connexion.count({
      from: 'VISITE_MINE',
      where: {
        key: mine.nom
      }
    });
    console.log("existsVisiteMine");
    //console.log(count);
    return count;
  }

  addMine(mine: Mine) {
    var success: boolean;
    this.utilityService.log("add mine : " + mine);
    console.log("add mine : " + mine);
    BaseService.connexion.insert({
      into: "MINE",
      values: [{key: mine.nom, content: JSON.stringify(mine)}], //you can insert multiple values at a time
    }).then(rowsInserted => {
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
    BaseService.connexion.insert({
      into: "VISITE_MINE",
      values: [{key: m.nom, content: JSON.stringify(vm)}], //you can insert multiple values at a time
    }).then(rowsInserted => {
      //console.log('rows inserted : ' + rowsInserted);
      success = rowsInserted == 1;
    }).catch(function (error) {
      //console.log("Erreur � l'insertion : " + error);
      success = false;
    });
  }

  selectVisiteMine(m: Mine): Promise<VisiteMineDAO[]> {
    //console.log("select vm ", m);
    //console.log("avant selectVisiteMine");
    var vmP: Promise<VisiteMineDAO[]> = BaseService.connexion.select({
      from: 'VISITE_MINE',
      where: {
        key: m.nom
      }
    });
    //console.log("apres selectVisiteMine");
    //console.log(vmP);
    return vmP;
    //return this.convertVisitesMines(minesP);
  }

  updateMine(mine: Mine): boolean {
    var success: boolean;
    //console.log("update mine : " + mine);
    BaseService.connexion.update({
      in: 'MINE',
      where: {
        key: mine.nom
      },
      set: {
        content: JSON.stringify(mine)
      }
    }).then(rowsUpdated => {
      //console.log('rows updated : ' + rowsUpdated);
      success = rowsUpdated == 1;
    }).catch(function (error) {
      //console.log("Erreur a l'insertion : " + error);
      success = false;
    });

    return success;
  }

  updateVisiteMine(mine: Mine, vm: VisiteMine): any {
    var success: boolean;
    //console.log("update visite mine : " + mine);
    BaseService.connexion.update({
      in: 'VISITE_MINE',
      where: {
        key: mine.nom
      },
      set: {
        content: JSON.stringify(vm)
      }
    }).then(rowsUpdated => {
      //console.log('rows updated : ' + rowsUpdated);
      success = rowsUpdated == 1;
    }).catch(function (error) {
      //console.log("Erreur a l'insertion : " + error);
      success = false;
    });

    return success;
  }

  existsVisiteForBassin(mine: Mine, bassin: Bassin): any {
    console.log("Recherche de visite pour mine "+mine.nom+" et bassin "+bassin.id);
    var count: Promise<number> = BaseService.connexion.count({
      from: 'VISITE_MINE',
      where: {
        key: mine.nom,
        content: {
          like:'%"'+bassin.id+'"%'
        }
      }
    });
    console.log("existsVisiteForBassin");
    //console.log(count);
    return count;
  }
}
