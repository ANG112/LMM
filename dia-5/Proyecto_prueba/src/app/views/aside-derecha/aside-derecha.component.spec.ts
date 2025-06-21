import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideDerechaComponent } from './aside-derecha.component';

describe('AsideDerechaComponent', () => {
  let component: AsideDerechaComponent;
  let fixture: ComponentFixture<AsideDerechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideDerechaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideDerechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
