import { Injectable } from '@angular/core';
import * as JsStore from 'jsstore';
import * as workerPath from 'file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js';

@Injectable()
export class JsStoreService {
  // this will make sure that we are using one instance or one connection
  // otherwise multiple instance will be created and thus multiple worker and that may create some problems
  static idbCon = new JsStore.Instance(new Worker(workerPath));
}
