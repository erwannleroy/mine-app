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

    const database: IDataBase = {
      name: this.DB_NAME,
      tables: [mineTable]
    }

    console.log('enter getDatabase', database);
    return database;
  }


  getMines(): Promise<MineDAO[]> {
    var mines: Promise<MineDAO[]> = BaseService.connexion.select({
      from: 'MINE'
    });
    console.log("select MINE");
    console.log(mines);
    return mines;
  }

  deleteMine(nomMine: string) {
    var nb: Promise<number> = BaseService.connexion.remove({
      from: 'MINE',
      where: { nom: nomMine }
    });
    console.log("nb mine supprimée :" + nb);
  }

  selectMines(name: string): Promise<MineDAO[]> {
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
        nom: key
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
      values: [{ nom: mine.nom, content: JSON.stringify(mine) }], //you can insert multiple values at a time
    }).then(rowsInserted => {
      console.log('rows inserted : ' + rowsInserted);
      success = rowsInserted == 1;
    }).catch(function (error) {
      console.log("Erreur � l'insertion : " + error);
      success = false;
    });
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
}
