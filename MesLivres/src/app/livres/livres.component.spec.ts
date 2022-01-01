import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivresComponent } from './livres.component';

describe('LivresComponent', () => {
  let component: LivresComponent;
  let fixture: ComponentFixture<LivresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
