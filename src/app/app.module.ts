import { Searchfoto } from './services/searchfoto.shared.service';
import { PainelModule } from './painel/painel.module';
import { PainelComponent } from './painel/painel.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FotoModule } from './foto/foto.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CadastroFotoComponent } from './cadastro-foto/cadastro-foto.component';
import { ListagemFotoComponent } from './listagem-foto/listagem-foto.component';
import { ROUTING } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FotoModule,
    PainelModule,
    HttpModule,
    ROUTING,
    FormsModule
  ],
  declarations: [
    AppComponent,
    CadastroFotoComponent,
    ListagemFotoComponent
  ],
  providers: [Searchfoto],
  bootstrap: [AppComponent]
})
export class AppModule { }
