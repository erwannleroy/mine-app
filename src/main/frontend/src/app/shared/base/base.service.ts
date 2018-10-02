import { Injectable } from '@angular/core';
//import {JsStoreService} from '../jsstore/jsstore.service';
import { Mine } from '../models/Mine';
import { MineDAO } from '../models/MineDAO';
import * as JsStore from 'jsstore';
import {
  IDataBase,
  DATA_TYPE,
  ITable
} from 'jsstore';
import * as workerPath from 'file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js';
import { VisiteMine } from '../models/VisiteMine';
import { VisiteMineDAO } from '../models/VisiteMineDAO';

@Injectable({
  providedIn: 'root'
})
export class BaseService {




  static connexion = new JsStore.Instance(new Worker(workerPath));

  DB_NAME = 'MINESOFT';

  constructor() {
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

    console.log(con);
    console.log('initializeDB exist ? ', con.isDbExist(this.DB_NAME));
    con.isDbExist(this.DB_NAME).then(function (isExist) {
      console.log("DB exist " + isExist);
      console.log(con);
      if (!isExist) {
        console.log('before creation');
        con.createDb(database);
        console.log('after creation');
      }
      console.log('before open');
      con.openDb(dbName);
      console.log('after open');
    });
  }

  private getDatabase() {
    console.log('enter getDatabase');
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

    console.log('enter getDatabase', database);
    return database;
  }


  getMines(): Array<Mine> {
    var minesP: Promise<MineDAO[]> = BaseService.connexion.select({
      from: 'MINE'
    });

    return this.convertMines(minesP);
  }

  convertMines(minesP: Promise<MineDAO[]>): Array<Mine> {
    var mines: Array<Mine> = [];

    minesP.then(data => {
      let minesDAO: Array<MineDAO> = data;
      console.log("retour du select by name");
      //        console.log(data.content);

      for (let m of minesDAO) {
        console.log(m);
        console.log("by name contenu de " + m.key);
        //          console.log(m.content.replace("^\"|\"$", ""));
        //          var mine:Mine = m.content;
        //          mines[0]=m.content;
        var mine = <Mine>JSON.parse(m.content);
        mines.push(mine);
      }
    });


    console.log(mines);
    return mines;
  }

  convertVisitesMines(vmP: Promise<VisiteMineDAO[]>): Array<VisiteMine> {
    var mines: Array<VisiteMine> = [];
    console.log("avant convertVisitesMines");
    vmP.then(data => {
      let vmDAO: Array<VisiteMineDAO> = data;
      console.log("résultat de la requete", data);


      for (let m of vmDAO) {
        console.log(m);
        console.log("item " + m.key);
        //          console.log(m.content.replace("^\"|\"$", ""));
        //          var mine:Mine = m.content;
        //          mines[0]=m.content;
        var mine = <VisiteMine>JSON.parse(m.content);
        mines.push(mine);
      }
    });


    console.log(mines);
    console.log("apres convertVisitesMines");
    return mines;
  }

  deleteMine(key: string) {
    var nb: Promise<number> = BaseService.connexion.remove({
      from: 'MINE',
      where: { key: key }
    });
    console.log("nb mine supprimée :" + nb);
  }

  selectMines(name: string): Array<Mine> {
    var minesP: Promise<MineDAO[]> = BaseService.connexion.select({
      from: 'MINE',
      where: {
        nom: { like: '%' + name + '%' }
      }
    });

    return this.convertMines(minesP);
  }

  selectMinesl(name: string): Promise<MineDAO[]> {
    var mines: Promise<MineDAO[]> = BaseService.connexion.select({
      from: 'MINE',
      where: {
        nom: { like: '%' + name + '%' }
      }
    });

    console.log("select MINE by name");
    console.log(mines);
    return mines;
  }



  existsMine(key: string): Promise<number> {
    var count: Promise<number> = BaseService.connexion.count({
      from: 'MINE',
      where: {
        key: key
      }
    });
    console.log("existsMine");
    console.log(count);
    return count;
  }

  addMine(mine: Mine) {
    var success: boolean;
    console.log("add mine : " + mine);
    BaseService.connexion.insert({
      into: "MINE",
      values: [{ key: mine.nom, content: JSON.stringify(mine) }], //you can insert multiple values at a time
    }).then(rowsInserted => {
      console.log('rows inserted : ' + rowsInserted);
      success = rowsInserted == 1;
    }).catch(function (error) {
      console.log("Erreur � l'insertion : " + error);
      success = false;
    });
  }

  addVisiteMine(m: Mine, vm: VisiteMine) {
    var success: boolean;
    console.log("add visite mine : " + m);
    BaseService.connexion.insert({
      into: "VISITE_MINE",
      values: [{ key: m.nom, content: JSON.stringify(vm) }], //you can insert multiple values at a time
    }).then(rowsInserted => {
      console.log('rows inserted : ' + rowsInserted);
      success = rowsInserted == 1;
    }).catch(function (error) {
      console.log("Erreur � l'insertion : " + error);
      success = false;
    });
  }

  selectVisiteMine(m: Mine): Array<VisiteMine> {
    console.log("select vm ", m);
    console.log("avant selectVisiteMine");
    var minesP: Promise<VisiteMineDAO[]> = BaseService.connexion.select({
      from: 'VISITE_MINE',
      where: {
        key: m.nom
      }
    });
    console.log("apres selectVisiteMine");
    console.log(minesP);
    return this.convertVisitesMines(minesP);
  }

  updateMine(mine: Mine): boolean {
    var success: boolean;
    console.log("update mine : " + mine);
    BaseService.connexion.update({
      in: 'MINE',
      where: {
        key: mine.nom
      },
      set: {
        content: JSON.stringify(mine)
      }
    }).then(rowsUpdated => {
      console.log('rows updated : ' + rowsUpdated);
      success = rowsUpdated == 1;
    }).catch(function (error) {
      console.log("Erreur a l'insertion : " + error);
      success = false;
    });

    return success;
  }

  updateVisiteMine(mine: Mine, vm: VisiteMine): any {
    var success: boolean;
    console.log("update visite mine : " + mine);
    BaseService.connexion.update({
      in: 'VISITE_MINE',
      where: {
        key: mine.nom
      },
      set: {
        content: JSON.stringify(vm)
      }
    }).then(rowsUpdated => {
      console.log('rows updated : ' + rowsUpdated);
      success = rowsUpdated == 1;
    }).catch(function (error) {
      console.log("Erreur a l'insertion : " + error);
      success = false;
    });

    return success;
  }
}
