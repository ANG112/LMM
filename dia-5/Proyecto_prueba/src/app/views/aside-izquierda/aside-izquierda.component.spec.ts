import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideIzquierdaComponent } from './aside-izquierda.component';

describe('AsideIzquierdaComponent', () => {
  let component: AsideIzquierdaComponent;
  let fixture: ComponentFixture<AsideIzquierdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideIzquierdaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideIzquierdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
