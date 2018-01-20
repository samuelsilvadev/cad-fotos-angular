import { Component, OnInit } from '@angular/core';

import { FotoComponent } from '../foto/foto.component';

import { FotoService } from './../foto/foto.service';
import { Searchfoto } from '../services/searchfoto.shared.service';
import { configs } from './../services/configs';


@Component({
  selector: 'app-listagem-foto',
  templateUrl: './listagem-foto.component.html',
  styleUrls: ['./listagem-foto.component.scss']
})
export class ListagemFotoComponent implements OnInit {

  valorPesquisado: string = '';
  fotos: FotoComponent[] = [];

  constructor(
    private _serviceFoto: FotoService,
    private _sharedServiceSearchFoto: Searchfoto) {

      _sharedServiceSearchFoto.changeEmitted$.subscribe(text => this.valorPesquisado = text );
    }

  ngOnInit() {

    this.getAllPhotos();
  }

  private getAllPhotos() {

    this._serviceFoto
      .getAllPhotos()
      .subscribe(result => {
        this.fotos = result;
        const arrIds = this.fotos.map(f => f.id);
        const maxId = Math.max(...arrIds);
        localStorage.setItem(configs.storage.nextId, JSON.stringify(maxId));
      });
  }

  remove(foto: FotoComponent) {

    this._serviceFoto.remove(foto.id)
    .subscribe(
          () => {
            const indice = this.fotos.indexOf(foto);
            this.fotos.splice(indice, 1);
            this.fotos = Array.from(this.fotos);
          },
          err => console.log(err));
  }
}
