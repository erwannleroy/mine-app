
import { BaseService } from '../base/base.service';
import { Mine } from '../models/Mine';
import { MineDAO } from '../models/MineDAO';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RequestOptions, RequestOptionsArgs, RequestMethod } from '@angular/http';
import { Network } from '@ngx-pwa/offline';
import { Observable, Subject } from 'rxjs';
import {VisiteMineDAO} from "../models/VisiteMineDAO";
import { VisiteMine } from '../models/VisiteMine';

@Injectable()
export class MineService {
 
  private subject = new Subject<Mine[]>();


  constructor(private http: HttpClient,
    private baseService: BaseService,
    protected network: Network) {
  }

  getMines(): Observable<Mine[]> {
    return this.subject.asObservable();
  }

  retrieveAll() {
    //console.log('retrievall' + this.network.online);
    if (this.network.online) {
      //console.log('on cherche les mines en ONLINE');
      //      //console.log('port utilis� : ', process.env.PORT);
          this.http.get<Mine[]>('/services/mines-all').subscribe(data => {
   //   this.http.get<Mine[]>('http://localhost:8080/services/mines-all').subscribe(data => {
        //console.log("retour du WS");
        //console.log(data);
        this.subject.next(data);
      });
    } else {
      // on tente dans le local storage
      var minesDAO: Array<MineDAO> = [];
      //console.log('on cherche les mines en OFFLINE');
      //console.log(this.baseService.getMines());
      this.baseService.getMines().then(data =>  {
        let minesDAO: Array<MineDAO> = data;
        let mines = this.baseService.convertMines(minesDAO);
        this.subject.next(mines);
      });
    }
  }


  findByName(name: string) {
    if (this.network.online) {
      const myParams = new HttpParams().set('name', name);

      //console.log(name);
      this.http.get<Mine[]>('/services/mines-by-name', {params: myParams}).subscribe(data => {
     // this.http.get<Mine[]>('http://localhost:8080/services/mines-by-name', { params: myParams }).subscribe(data => {
        this.subject.next(data);
        //console.log(data);
      });
    } else {
      // on tente dans le local storage
      var minesDAO: Array<MineDAO> = [];
      //console.log('on cherche les mines en OFFLINE');
      //      //console.log(this.baseService.selectMines(name));
      this.baseService.selectMines(name).then(data =>  {
        let minesDAO: Array<MineDAO> = data;
        let mines = this.baseService.convertMines(minesDAO);
        this.subject.next(mines);
      });
    }
  }

  addVisite(vm: VisiteMine): any {
    if (this.network.online) {

      ////console.log(name);
     // this.http.get<Mine[]>('/services/mines-by-name', {params: myParams}).subscribe(data => {
    //this.http.post('http://localhost:8080/services/mine/'+vm.nomMine+'/add-visite', vm).subscribe(data => {
     //   //console.log(data);
     // });
    }
  }
}
