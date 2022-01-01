import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLivreComponent } from './add-livre.component';

describe('AddLivreComponent', () => {
  let component: AddLivreComponent;
  let fixture: ComponentFixture<AddLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLivreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
