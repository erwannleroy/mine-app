import {UtilityService} from '../utility/utility.service';
import {BaseService} from '../base/base.service';
import {Mine} from '../models/Mine';
import {MineDAO} from '../models/MineDAO';
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {RequestOptions, RequestOptionsArgs, RequestMethod} from '@angular/http';
import {Network} from '@ngx-pwa/offline';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class MineService {
  private subject = new Subject<Mine[]>();


  constructor(private http: HttpClient,
    private baseService: BaseService,
    private utilityService: UtilityService,
    protected network: Network) {
  }




  getMines(): Observable<Mine[]> {
    return this.subject.asObservable();
  }

  retrieveAll() {
    console.log('retrievall' + this.network.online);
    if (this.network.online) {
      console.log('on cherche les mines en ONLINE')
      this.http.get<Mine[]>('http://localhost:8080/minesAll').subscribe(data => {
        console.log("retour du WS");
        console.log(data);
        this.subject.next(data);
      });
    } else {
      // on tente dans le local storage
      var minesDAO: Array<MineDAO> = [];
      console.log('on cherche les mines en OFFLINE');
      console.log(this.baseService.getMines());
      this.baseService.getMines().then(data => {
        minesDAO = data;
        console.log("retour du select");
        console.log(data);
        //console.log(data.length);
        var mines: Array<Mine> = [];
        for (let m of minesDAO) {
          console.log(m);
          console.log("contenu de " + m.nom);
          //          console.log(m.content.replace("^\"|\"$", ""));
          //          var mine:Mine = m.content;
          //          mines[0]=m.content;
          var mine = <Mine>JSON.parse(m.content);
          mines.push(mine);
        } 
        console.log("prochain contenu de subject mines");
        console.log(mines);
        this.subject.next(mines);
      });
    }
  }


  findByName(name: string) {
    if (this.network.online) {
      const myParams = new HttpParams().set('name', name);

      console.log(name);
      this.http.get<Mine[]>('http://localhost:8080/mines', {params: myParams}).subscribe(data => {
        this.subject.next(data);
        console.log(data);
      });
    } else {
      // on tente dans le local storage
      var minesDAO: Array<MineDAO> = [];
      console.log('on cherche les mines en OFFLINE');
      //      console.log(this.baseService.selectMines(name));
      this.baseService.selectMines(name).then(data => {
        minesDAO = data;
        console.log("retour du select by name");
//        console.log(data.content);
        var mines: Array<Mine> = [];
        for (let m of minesDAO) {
          console.log(m);
          console.log("by name contenu de " + m.nom);
          //          console.log(m.content.replace("^\"|\"$", ""));
          //          var mine:Mine = m.content;
          //          mines[0]=m.content;
          var mine = <Mine>JSON.parse(m.content);
          mines.push(mine);
        }
        console.log("by name prochain contenu de subject mines");
        console.log(mines);
        this.subject.next(mines);
      }).catch(error => {
        console.log("erreur lors de la requete by name " + error);
      });
    }
  }


}
