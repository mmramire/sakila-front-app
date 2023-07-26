import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoActoresComponent } from './resultado-actores.component';

describe('ResultadoActoresComponent', () => {
  let component: ResultadoActoresComponent;
  let fixture: ComponentFixture<ResultadoActoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoActoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
