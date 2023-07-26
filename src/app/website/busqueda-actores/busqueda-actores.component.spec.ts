import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaActoresComponent } from './busqueda-actores.component';

describe('BusquedaActoresComponent', () => {
  let component: BusquedaActoresComponent;
  let fixture: ComponentFixture<BusquedaActoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaActoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
