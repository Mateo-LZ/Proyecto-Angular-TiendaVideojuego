import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../service/carrito.service';

@Component({
  selector: 'app-carrito-mini',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './carrito-mini.html',
  styleUrls: ['./carrito-mini.css']
})
export class CarritoMini implements OnInit {
  items: any[] = [];
  totalItems: number = 0;

  constructor(private carritoService: CarritoService) {
    console.log('📋 MINI-CARRITO: Componente inicializado');
  }

  ngOnInit() {
    console.log('📋 MINI-CARRITO: Suscribiéndose a cambios del carrito');
    this.carritoService.items$.subscribe(items => {
      console.log('📋 MINI-CARRITO: Carrito actualizado. Items:', items);
      this.items = items;
      this.totalItems = this.carritoService.getTotalItems();
      console.log('📋 MINI-CARRITO: Total items actualizado:', this.totalItems);
    });
  }

  eliminarItem(index: number) {
    console.log('📋 MINI-CARRITO: Eliminando item con índice:', index);
    this.carritoService.eliminar(index);
  }

  limpiarCarrito() {
    console.log('📋 MINI-CARRITO: Solicitando limpiar carrito');
    this.carritoService.limpiar();
  }

  get total(): number {
    const total = this.carritoService.getTotal();
    console.log('📋 MINI-CARRITO: Total calculado:', total);
    return total;
  }
}