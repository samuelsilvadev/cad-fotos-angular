import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { configs } from './../services/configs';
import { FotoComponent } from './foto.component';

@Injectable()
export class FotoService {

  constructor(private http: Http) {}

  getAllFotos() {
    return this.http
      .get(`${configs.baseUri}/fotos`)
      .map(succ => succ.json());
  }

  save(foto: FotoComponent) {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http
      .post(`${configs.baseUri}/fotos`, JSON.stringify(foto), { headers: headers })
      .subscribe(() => {
        console.log('Salvo com sucesso');
      }, err => console.log(err));
  }
}
