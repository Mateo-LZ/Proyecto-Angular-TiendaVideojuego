import { Component, Input, ViewEncapsulation  } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CarritoService } from '../../service/carrito.service';

@Component({
  selector: 'app-tarjeta-juego',
  standalone: true,
  templateUrl: './tarjeta-juego.html',
  styleUrls: ['./tarjeta-juego.css'],
  imports: [CommonModule, CurrencyPipe],
  encapsulation: ViewEncapsulation.None // ✅ ESTA LÍNEA

})
export class TarjetaJuego {
  @Input() juego: any;

  constructor(private carritoService: CarritoService) {
    console.log('🎮 TARJETA: Componente inicializado');
  }

  agregarAlCarrito(juego: any) {
    // ✅ MENSAJES MUY VISIBLES EN CONSOLA
    console.log('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥');
    console.log('🔥🔥🔥 CLICK DETECTADO 🔥🔥🔥');
    console.log('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥');
    
    console.log('🟢 Botón presionado para:', juego?.nombre);
    console.log('🎮 Método agregarAlCarrito llamado');
    console.log('🔧 Servicio disponible:', !!this.carritoService);
    console.log('📋 Datos del juego:', juego);
    
    // ✅ Mensaje con estilo en la consola (muy visible)
    console.log('%c=== CLICK FUNCIONANDO ===', 'color: green; font-size: 20px; font-weight: bold; background: yellow; padding: 10px;');
    
    if (juego && this.carritoService) {
      console.log('📞 Llamando al servicio carrito...');
      this.carritoService.agregar(juego);
      console.log('✅ Llamada al servicio completada');
      
      // ✅ Mensaje de éxito
      console.log('%c✅ JUEGO AGREGADO EXITOSAMENTE', 'color: white; font-size: 16px; font-weight: bold; background: green; padding: 8px;');
    } else {
      console.error('❌ ERROR - Juego o servicio no disponible');
      console.error('Juego:', juego);
      console.error('Servicio disponible:', !!this.carritoService);
      
      // ✅ Mensaje de error
      console.log('%c❌ ERROR AL AGREGAR', 'color: white; font-size: 16px; font-weight: bold; background: red; padding: 8px;');
    }
    
    console.log('🔥🔥🔥 FIN DEL MÉTODO 🔥🔥🔥');
    console.log('──────────────────────────────');
  }
}