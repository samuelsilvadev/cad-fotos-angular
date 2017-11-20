import { PainelModule } from './painel/painel.module';
import { PainelComponent } from './painel/painel.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FotoModule } from './foto/foto.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CadastroFotoComponent } from './cadastro-foto/cadastro-foto.component';
import { ListagemFotoComponent } from './listagem-foto/listagem-foto.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroFotoComponent,
    ListagemFotoComponent
  ],
  imports: [
    BrowserModule,
    FotoModule,
    PainelModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
