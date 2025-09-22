import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { FormContacto } from '../../components/form-contacto/form-contacto';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-contacto',
  imports: [FormContacto],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {

}
