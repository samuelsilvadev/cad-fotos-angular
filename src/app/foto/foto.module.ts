import { FotoService } from './foto.service';
import { NgModule } from '@angular/core';

import { FotoComponent } from './foto.component';

@NgModule({
  declarations: [FotoComponent],
  exports: [FotoComponent],
  providers: [FotoService]
})
export class FotoModule {

}
