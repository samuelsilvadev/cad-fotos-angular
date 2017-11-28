import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filtroPorTitulo'
})
export class FotoPipe implements PipeTransform {

  transform(listaDeFotos, valorDigitado: string = '') {

    return listaDeFotos
            .filter(foto => foto.titulo.toLowerCase().includes(valorDigitado.toLowerCase()));
  }
}
