import { Component, OnInit } from '@angular/core';
import { FotoService } from './../foto/foto.service';
import { Searchfoto } from '../services/searchfoto.shared.service';

@Component({
  selector: 'app-listagem-foto',
  templateUrl: './listagem-foto.component.html',
  styleUrls: ['./listagem-foto.component.scss']
})
export class ListagemFotoComponent implements OnInit {

  valorPesquisado: string = '';
  fotos: Object[] = [];

  constructor(
    private serviceFoto: FotoService,
    private _sharedServiceSearchFoto: Searchfoto) {

      _sharedServiceSearchFoto.changeEmitted$.subscribe(text => this.valorPesquisado = text );
    }

  ngOnInit() {

    this.serviceFoto
      .getAllFotos()
      .subscribe(result => this.fotos = result);
  }
}
