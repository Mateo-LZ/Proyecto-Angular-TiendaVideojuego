import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { ListaJuegos } from '../../components/lista-juegos/lista-juegos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, Navbar, Footer, ListaJuegos],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {}
