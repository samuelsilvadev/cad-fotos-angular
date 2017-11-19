import { Component, Input } from '@angular/core';

@Component({
  selector: 'painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent {

  @Input() titulo: string = '';

}
