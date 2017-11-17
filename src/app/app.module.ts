import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FotoModule } from './foto/foto.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FotoModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
