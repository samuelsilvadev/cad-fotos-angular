import { Searchfoto } from './services/searchfoto.shared.service';
import { ListagemFotoComponent } from './listagem-foto/listagem-foto.component';
import { FotoComponent } from './foto/foto.component';
import { FotoService } from './foto/foto.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _sharedServiceSearchFoto: Searchfoto) {

  }

  pesquisarFotos(valorDigitado: string) {

    this._sharedServiceSearchFoto.emitChange(valorDigitado);
  }
}
