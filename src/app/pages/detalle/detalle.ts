import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { DetalleJuego } from '../../components/detalle-juego/detalle-juego';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule,DetalleJuego],
  templateUrl: './detalle.html',
  styleUrls: ['./detalle.css']
})
export class Detalle {
  };

