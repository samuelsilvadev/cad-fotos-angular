import { Injectable, } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { configs } from './../services/configs';
import { FotoComponent } from './foto.component';

@Injectable()
export class FotoService {

  private _headers: Headers;
  private _endPoint: string = 'fotos';

  constructor(private http: Http) {

    this._headers = new Headers();
    this._headers.append('Content-Type', 'application/json');
  }

  getAllFotos() {
    return this.http
      .get(`${configs.baseUri}/${this._endPoint}`)
      .map(succ => succ.json());
  }

  save(foto: FotoComponent): Observable<Response> {

    return this.http
      .post(
        `${configs.baseUri}/${this._endPoint}`,
        JSON.stringify(foto),
        { headers: this._headers });
  }
}
