import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filtros',
  standalone: true,
  templateUrl: './filtros.html',
  styleUrls: ['./filtros.css']
})
export class Filtros {
  ordenSeleccionado: string = 'reciente';

  @Output() cambioOrden = new EventEmitter<string>();

  ordenarJuegos() {
    this.cambioOrden.emit(this.ordenSeleccionado);
  }
}
