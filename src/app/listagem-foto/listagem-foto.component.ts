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
    private serviceFoto: FotoService,
    private _sharedServiceSearchFoto: Searchfoto) {

      _sharedServiceSearchFoto.changeEmitted$.subscribe(text => this.valorPesquisado = text );
    }

  ngOnInit() {

    this.getFotos();
  }

  private getFotos() {

    this.serviceFoto
      .getAllFotos()
      .subscribe(result => {
        this.fotos = result;
        const arrIds = this.fotos.map(f => f.id);
        const maxId = Math.max(...arrIds);
        localStorage.setItem(configs.storage.nextId, JSON.stringify(maxId));
      });
  }
}
