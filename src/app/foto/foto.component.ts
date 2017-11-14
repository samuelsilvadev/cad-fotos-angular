import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.scss']
})
export class FotoComponent {

  @Input() url: string = '';
  @Input() titulo: string = 'Não Informado';

  constructor() {
    console.log('Component foto iniciado');
  }

}
