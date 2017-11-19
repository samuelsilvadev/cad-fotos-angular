import { FotoComponent } from './foto/foto.component';
import { FotoService } from './foto/foto.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  fotos: Object[] = [];

  constructor(private serviceFoto: FotoService) {}

  ngOnInit() {

    this.serviceFoto
      .getAllFotos()
      .subscribe(result => this.fotos = result);
  }

}
