import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { configs } from './../services/configs';

@Injectable()
export class FotoService {

  constructor(private http: Http) {}

  getAllFotos() {
    return this.http
      .get(`${configs.baseUri}/fotos`)
      .map(succ => succ.json());
  }
}
