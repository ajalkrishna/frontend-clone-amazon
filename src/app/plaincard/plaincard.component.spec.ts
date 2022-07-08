import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaincardComponent } from './plaincard.component';

describe('PlaincardComponent', () => {
  let component: PlaincardComponent;
  let fixture: ComponentFixture<PlaincardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaincardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaincardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
