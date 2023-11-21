import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleResultadoActoresComponent } from './single-resultado-actores.component';

describe('SingleResultadoActoresComponent', () => {
  let component: SingleResultadoActoresComponent;
  let fixture: ComponentFixture<SingleResultadoActoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleResultadoActoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleResultadoActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
