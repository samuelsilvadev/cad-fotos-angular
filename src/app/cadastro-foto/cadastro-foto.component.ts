import { FotoService } from './../foto/foto.service';
import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';

@Component({
  selector: 'app-cadastro-foto',
  templateUrl: './cadastro-foto.component.html',
  styleUrls: ['./cadastro-foto.component.scss']
})
export class CadastroFotoComponent {

  foto: FotoComponent;

  constructor(private serviceFoto: FotoService) {

    this.foto = new FotoComponent();
    this.foto.titulo = '';
    this.foto.id = 9;
  }

  cadastrar(e) {

    e.preventDefault();
    this.serviceFoto.save(this.foto);
  }

  iniciarValores(e) {

    e.preventDefault();
    this.foto = new FotoComponent();
    this.foto.titulo = '';
  }
}
