import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FotoService {

  constructor(private http: Http) {}

  getAllFotos() {
    return this.http
      .get('http://localhost:3000/v1/fotos')
      .map(succ => succ.json());
  }
}
