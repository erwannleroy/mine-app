import { Injectable } from '@angular/core';
//import { Instance} from 'JsStore';
import * as JsStore from 'jsstore';
import * as workerPath from 'file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js';
//import * as workerPath from 'file-loader?name=jsstore/dist/jsstore.worker.js';
//import * as workerPath from '';
//declare var JsStore; 

@Injectable()
export class JsStoreService {
  // this will make sure that we are using one instance or one connection
  // otherwise multiple instance will be created and thus multiple worker and that may create some problems
  static idbCon = new JsStore.Instance(new Worker(workerPath));
//    static idbCon = new JsStore.Instance("MINESOFT");
//      static idbCon: Instance = new JsStore.Instance();

}
