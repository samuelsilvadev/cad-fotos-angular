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

  getPhoto(id): Observable<FotoComponent> {
    return this.http
      .get(`${configs.baseUri}/${this._endPoint}/${id}`)
      .map(succ => succ.json());
  }

  getAllPhotos() {
    return this.http
      .get(`${configs.baseUri}/${this._endPoint}`)
      .map(succ => succ.json());
  }

  save(photo: FotoComponent): Observable<Response> {
      return this.http
        .post(
          `${configs.baseUri}/${this._endPoint}`,
          JSON.stringify(photo),
          { headers: this._headers });
  }

  update(photo: FotoComponent) {
    if (photo.id) {
      return this.http
        .put(
          `${configs.baseUri}/${this._endPoint}/${photo.id}`,
          JSON.stringify(photo),
          { headers: this._headers });
    }
  }

  remove(photoId) {
    return this.http
      .delete(
        `${configs.baseUri}/${this._endPoint}/${JSON.stringify(photoId)}`,
        { headers: this._headers });
  }
}
