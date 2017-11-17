import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FotoService {

  fotos: Object[] = [];
  http: Http = null;

  constructor(http: Http) {
    this.http = http;
  }

  getAllFotos() {
    this.http
      .get('http://localhost:3000/v1/fotos')
      .subscribe(succ => { this.fotos = succ.json(); console.log(this.fotos); });
  }
}
