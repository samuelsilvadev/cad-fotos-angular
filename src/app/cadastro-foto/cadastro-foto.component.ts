import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';

@Component({
  selector: 'app-cadastro-foto',
  templateUrl: './cadastro-foto.component.html',
  styleUrls: ['./cadastro-foto.component.scss']
})
export class CadastroFotoComponent implements OnInit {

  foto: FotoComponent;

  constructor() {

    this.foto = new FotoComponent();
    this.foto.titulo = '';
  }

  ngOnInit() {
  }

  cadastrar(e) {

    e.preventDefault();
    console.log(this.foto);
  }

  iniciarValores(e) {

    e.preventDefault();
    this.foto = new FotoComponent();
    this.foto.titulo = '';
  }

}
