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
  private _mode: MODE = MODE.SAVE;

  constructor(
    private _serviceFoto: FotoService,
    private _activatedRoute: ActivatedRoute) {

    let lastId = Number(localStorage.getItem(configs.storage.nextId));

    this._activatedRoute.params.subscribe(params => this._getPhotoToUpdate(params['id']));
    this.foto = new FotoComponent();
    this.foto.titulo = '';
    this.foto.id = ++lastId;
  }

  save(e) {

    e.preventDefault();

    if (this._mode === MODE.SAVE) {
      this._serviceFoto.save(this.foto)
        .subscribe(
        succ => console.log('Register success'),
        err => console.log(err));
    } else {
      this._serviceFoto.update(this.foto)
        .subscribe(
        succ => console.log('Update success'),
        err => console.log(err));
    }
  }

  public initValues(e) {

    e.preventDefault();
    this.foto = new FotoComponent();
    this.foto.titulo = '';
  }

  private _getPhotoToUpdate(id) {

    if (id) {
      this._serviceFoto.getPhoto(id)
        .subscribe(
        resp => {
          this._mode = MODE.UPDATE;
          this.foto = resp;
        },
        err => console.log(err));
    }
  }
}

enum MODE {
  SAVE,
  UPDATE
}
