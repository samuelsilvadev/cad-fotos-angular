import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filtroPorTitulo'
})
export class FotoPipe implements PipeTransform {

  transform(listaDeFotos, valorDigitado: string) {
    console.log(listaDeFotos);
    console.log(valorDigitado);
  }
}
