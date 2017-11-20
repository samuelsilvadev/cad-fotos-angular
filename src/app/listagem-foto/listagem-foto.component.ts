import { Component, OnInit } from '@angular/core';
import { FotoService } from './../foto/foto.service';

@Component({
  selector: 'app-listagem-foto',
  templateUrl: './listagem-foto.component.html',
  styleUrls: ['./listagem-foto.component.scss']
})
export class ListagemFotoComponent implements OnInit {

  fotos: Object[] = [];

  constructor(private serviceFoto: FotoService) {}

  ngOnInit() {

    this.serviceFoto
      .getAllFotos()
      .subscribe(result => this.fotos = result);
  }
}
