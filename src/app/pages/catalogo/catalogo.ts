import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Filtros } from '../../components/filtros/filtros';
import { ListaJuegos } from '../../components/lista-juegos/lista-juegos';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule,Filtros,ListaJuegos],
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css']
})
export class Catalogo {  // 👈 ESTA CLASE DEBE LLAMARSE IGUAL QUE TU IMPORT
  constructor() {}
}
