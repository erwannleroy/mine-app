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
    con.isDbExist(this.DB_NAME).then(function(isExist) {
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
        name: "nom",
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
    var mines: Promise<MineDAO[]>=BaseService.connexion.select({
      from: 'MINE'
    });
    console.log("select MINE");
    console.log(mines);
    return mines;
  }

  selectMines(name: string): Promise<MineDAO[]> {
    var mines: Promise<MineDAO[]>=BaseService.connexion.select({
      from: 'MINE',
      where: {
        nom: {like: '%'+name+'%'}
      }
    });
    console.log("select MINE by name");
    console.log(mines);
    return mines;
  }

  addMine(mine: Mine) {
    console.log("add mine : " + mine);
    BaseService.connexion.insert({
      into: "MINE",
      values: [{nom: mine.nom, content: JSON.stringify(mine)}], //you can insert multiple values at a time
    }).then(function(rowsInserted) {
      console.log('rows inserted : ' + rowsInserted);
      if (rowsInserted > 0) {
        alert('Successfully Added');
      }
    }).catch(function(error) {
      console.log("Erreur à l'insertion : " + error);
      alert(error.message);
    });
  }
}
