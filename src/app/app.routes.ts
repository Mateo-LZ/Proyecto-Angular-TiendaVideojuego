import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Catalogo } from './pages/catalogo/catalogo';
import { Contacto } from './pages/contacto/contacto';
import { Carrito } from './pages/carrito/carrito';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'catalogo', component: Catalogo },
  { path: 'contacto', component: Contacto },
  { path: 'carrito', component: Carrito },
  { path: '**', redirectTo: '' } // Para rutas no encontradas
];
