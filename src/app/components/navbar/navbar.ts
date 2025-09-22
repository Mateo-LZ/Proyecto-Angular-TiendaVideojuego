import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../service/carrito.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar implements OnInit {
  totalItems: number = 0;

  constructor(private carritoService: CarritoService) {
    console.log('🧭 NAVBAR: Componente inicializado');
  }

  ngOnInit() {
    console.log('🧭 NAVBAR: Suscribiéndose a cambios del carrito');
    this.carritoService.items$.subscribe(items => {
      console.log('🧭 NAVBAR: Carrito actualizado. Items:', items);
      this.totalItems = this.carritoService.getTotalItems();
      console.log('🧭 NAVBAR: Total items actualizado:', this.totalItems);
    });
  }
}