import { RouterModule, Routes } from '@angular/router';

import { ListagemFotoComponent } from './listagem-foto/listagem-foto.component';
import { CadastroFotoComponent } from './cadastro-foto/cadastro-foto.component';



const APP_ROUTES: Routes = [
  { path: '', component: ListagemFotoComponent },
  { path: 'cadastro', component: CadastroFotoComponent },
  { path: 'lista', component: ListagemFotoComponent },
  { path: '**', component: ListagemFotoComponent }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);
