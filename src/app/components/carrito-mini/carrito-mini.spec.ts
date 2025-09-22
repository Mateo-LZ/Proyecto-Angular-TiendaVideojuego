import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoMini } from './carrito-mini';

describe('CarritoMini', () => {
  let component: CarritoMini;
  let fixture: ComponentFixture<CarritoMini>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoMini]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoMini);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
