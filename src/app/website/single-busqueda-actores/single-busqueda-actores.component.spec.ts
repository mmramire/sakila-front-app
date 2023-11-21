import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBusquedaActoresComponent } from './single-busqueda-actores.component';

describe('SingleBusquedaActoresComponent', () => {
  let component: SingleBusquedaActoresComponent;
  let fixture: ComponentFixture<SingleBusquedaActoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleBusquedaActoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleBusquedaActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
