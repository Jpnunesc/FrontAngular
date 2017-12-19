import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { PratoComponent } from './prato/prato.component';
import { EditarPratoComponent } from './prato/editar-prato/editar-prato.component';
import { CadastroPratoComponent } from './prato/cadastro-prato/cadastro-prato.component';
import { ListaPratoComponent } from './prato/lista-prato/lista-prato.component';

import { RestauranteComponent } from './restaurante/restaurante.component'; 
import { CadastroRestauranteComponent } from './restaurante/cadastro-restaurante/cadastro-restaurante.component';
import { ListaRestauranteComponent } from './restaurante/lista-restaurante/lista-restaurante.component';
import { EditarResteuranteComponent } from './restaurante/editar-resteurante/editar-resteurante.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    
    { path: 'prato', component: PratoComponent },
    { path: 'prato/editarprato/:id', component: EditarPratoComponent },
    { path: 'prato/cadastroprato', component: CadastroPratoComponent },
    { path: 'prato/listaprato', component: ListaPratoComponent },

    { path: 'restaurante', component: RestauranteComponent },
    { path: 'restaurante/editarrestaurante/:id', component: EditarResteuranteComponent },
    { path: 'restaurante/cadastrorestaurante', component: CadastroRestauranteComponent },
    { path: 'restaurante/listarestaurante', component: ListaRestauranteComponent },     
    
    { path: '**', component: HomeComponent }
];

export const routing = RouterModule.forRoot(appRoutes);