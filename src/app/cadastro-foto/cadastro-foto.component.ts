import { FotoService } from './../foto/foto.service';
import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { configs } from '../services/configs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-foto',
  templateUrl: './cadastro-foto.component.html',
  styleUrls: ['./cadastro-foto.component.scss']
})
export class CadastroFotoComponent {

  foto: FotoComponent;

  constructor(
    private _serviceFoto: FotoService,
    private _activatedRoute: ActivatedRoute) {

    let lastId = Number(localStorage.getItem(configs.storage.nextId));

    this._activatedRoute.params.subscribe(params => this._getPhotoToUpdate(params['id']));
    this.foto = new FotoComponent();
    this.foto.titulo = '';
    this.foto.id = ++lastId;
  }

  cadastrar(e) {

    e.preventDefault();
    this._serviceFoto.save(this.foto)
      .subscribe(
          succ => console.log(),
          err => console.log(err));
  }

  iniciarValores(e) {

    e.preventDefault();
    this.foto = new FotoComponent();
    this.foto.titulo = '';
  }

  private _getPhotoToUpdate(id) {

    if (id) {
      this._serviceFoto.getPhoto(id)
        .subscribe(
          resp => this.foto = resp,
          err => console.log(err));
    }
  }
}
