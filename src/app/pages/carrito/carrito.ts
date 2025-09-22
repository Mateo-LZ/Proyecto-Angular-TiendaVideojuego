import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../service/carrito.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css']
})
export class Carrito implements OnInit {
  items: any[] = [];

  constructor(private carritoService: CarritoService) {
    console.log('📦 CARRITO: Componente inicializado');
  }

  ngOnInit() {
    console.log('📦 CARRITO: Suscribiéndose a cambios del carrito');
    this.carritoService.items$.subscribe(items => {
      console.log('📦 CARRITO: Recibida actualización de items:', items);
      this.items = items;
    });
    
    // Cargar items iniciales
    const itemsIniciales = this.carritoService.getItems();
    console.log('📦 CARRITO: Items iniciales:', itemsIniciales);
    this.items = itemsIniciales;
  }

  eliminarItem(index: number) {
    console.log('📦 CARRITO: Eliminando item con índice:', index);
    this.carritoService.eliminar(index);
  }

  actualizarCantidad(index: number, event: any) {
    const cantidad = parseInt(event.target.value, 10);
    console.log('📦 CARRITO: Actualizando cantidad, índice:', index, 'cantidad:', cantidad);
    this.carritoService.actualizarCantidad(index, cantidad);
  }

  limpiarCarrito() {
    console.log('📦 CARRITO: Solicitando limpiar carrito');
    this.carritoService.limpiar();
  }

  finalizarCompra() {
    if (this.items.length === 0) return;
    alert('✅ La compra se ha finalizado');
    this.limpiarCarrito(); // Opcional: limpiar carrito
  }

  get total(): number {
    return this.items.reduce((acc, item) => acc + (item.precio * (item.cantidad || 1)), 0);
  }
}
