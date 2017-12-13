import { FotoService } from './foto.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.scss']
})
export class FotoComponent {

  id: number = 0;
  @Input() url: string = '';
  @Input() titulo: string = 'Não Informado';

}
