import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoctailsComponent } from './coctails.component';

describe('CoctailsComponent', () => {
  let component: CoctailsComponent;
  let fixture: ComponentFixture<CoctailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoctailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoctailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
