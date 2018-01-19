import { FotoService } from './../foto/foto.service';
import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { configs } from '../services/configs';

@Component({
  selector: 'app-cadastro-foto',
  templateUrl: './cadastro-foto.component.html',
  styleUrls: ['./cadastro-foto.component.scss']
})
export class CadastroFotoComponent {

  foto: FotoComponent;

  constructor(private serviceFoto: FotoService) {

    let lastId = Number(localStorage.getItem(configs.storage.nextId));

    this.foto = new FotoComponent();
    this.foto.titulo = '';
    this.foto.id = ++lastId;
  }

  cadastrar(e) {

    e.preventDefault();
    this.serviceFoto.save(this.foto)
      .subscribe(
          succ => console.log(),
          err => console.log(err));
  }

  iniciarValores(e) {

    e.preventDefault();
    this.foto = new FotoComponent();
    this.foto.titulo = '';
  }
}
