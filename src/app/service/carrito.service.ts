import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CarritoService {
  private itemsSubject = new BehaviorSubject<any[]>([]);
  items$ = this.itemsSubject.asObservable();

  getItems() {
    return this.itemsSubject.value;
  }

  agregar(item: any) {
    console.log('🛒 SERVICIO: Agregando item:', item?.nombre);
    const currentItems = this.itemsSubject.value;
    console.log('🛒 SERVICIO: Items actuales:', currentItems);
    
    const existingItemIndex = currentItems.findIndex(i => i.id === item.id);
    
    if (existingItemIndex > -1) {
      console.log('🛒 SERVICIO: Item ya existe, incrementando cantidad');
      const updatedItems = [...currentItems];
      updatedItems[existingItemIndex].cantidad = (updatedItems[existingItemIndex].cantidad || 1) + 1;
      this.itemsSubject.next(updatedItems);
      console.log('🛒 SERVICIO: Carrito actualizado:', updatedItems);
    } else {
      console.log('🛒 SERVICIO: Item nuevo, agregando');
      const newItem = {...item, cantidad: 1};
      const items = [...currentItems, newItem];
      this.itemsSubject.next(items);
      console.log('🛒 SERVICIO: Nuevo item agregado:', items);
    }
  }

  eliminar(index: number) {
    console.log('🛒 SERVICIO: Eliminando item en índice:', index);
    const items = [...this.itemsSubject.value];
    items.splice(index, 1);
    this.itemsSubject.next(items);
    console.log('🛒 SERVICIO: Item eliminado. Carrito ahora:', items);
  }

  actualizarCantidad(index: number, nuevaCantidad: number) {
    console.log('🛒 SERVICIO: Actualizando cantidad, índice:', index, 'nueva cantidad:', nuevaCantidad);
    const items = [...this.itemsSubject.value];
    if (nuevaCantidad <= 0) {
      this.eliminar(index);
    } else {
      items[index].cantidad = nuevaCantidad;
      this.itemsSubject.next(items);
    }
  }

  limpiar() {
    console.log('🛒 SERVICIO: Limpiando carrito');
    this.itemsSubject.next([]);
  }

  getTotal(): number {
    const total = this.itemsSubject.value.reduce((sum, item) => sum + (item.precio * (item.cantidad || 1)), 0);
    console.log('🛒 SERVICIO: Total calculado:', total);
    return total;
  }

  getTotalItems(): number {
    const totalItems = this.itemsSubject.value.reduce((sum, item) => sum + (item.cantidad || 1), 0);
    console.log('🛒 SERVICIO: Total items calculado:', totalItems);
    return totalItems;
  }
}