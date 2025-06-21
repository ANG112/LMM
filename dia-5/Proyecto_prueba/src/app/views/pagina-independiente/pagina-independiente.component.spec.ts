import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaIndependienteComponent } from './pagina-independiente.component';

describe('PaginaIndependienteComponent', () => {
  let component: PaginaIndependienteComponent;
  let fixture: ComponentFixture<PaginaIndependienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaIndependienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaIndependienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
