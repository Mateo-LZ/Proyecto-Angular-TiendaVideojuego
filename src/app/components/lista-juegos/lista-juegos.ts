import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegoService } from '../../service/juego.service';
import { TarjetaJuego } from '../tarjeta-juego/tarjeta-juego';

@Component({
  selector: 'app-lista-juegos',
  standalone: true,
  imports: [CommonModule, TarjetaJuego],
  templateUrl: './lista-juegos.html',
  styleUrls: ['./lista-juegos.css']
})
export class ListaJuegos implements OnInit {
  juegos: any[] = [];
  juegosFiltrados: any[] = [];

  constructor(private juegoService: JuegoService) {
    console.log('📋 LISTA-JUEGOS: Componente inicializado');
  }

  ngOnInit() {
    this.juegos = this.juegoService.getJuegos();
    this.juegosFiltrados = [...this.juegos];
    console.log('📋 LISTA-JUEGOS: Inicializado con', this.juegos.length, 'juegos');
    console.log('📋 LISTA-JUEGOS: Juegos cargados:', this.juegos);
  }

  filtrarPorCategoria(categoria: string) {
    console.log('📋 LISTA-JUEGOS: Filtrando por categoría:', categoria);
    if (categoria) {
      this.juegosFiltrados = this.juegoService.getJuegosPorCategoria(categoria);
    } else {
      this.juegosFiltrados = [...this.juegos];
    }
    console.log('📋 LISTA-JUEGOS: Juegos filtrados:', this.juegosFiltrados);
  }

  ordenar(criterio: string) {
    console.log('📋 LISTA-JUEGOS: Ordenando por:', criterio);
    if (criterio === 'nombre') {
      this.juegosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (criterio === 'menor') {
      this.juegosFiltrados.sort((a, b) => a.precio - b.precio);
    } else if (criterio === 'mayor') {
      this.juegosFiltrados.sort((a, b) => b.precio - a.precio);
    }
  }
}