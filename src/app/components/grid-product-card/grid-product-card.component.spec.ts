import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridProductCardComponent } from './grid-product-card.component';

describe('GridProductCardComponent', () => {
  let component: GridProductCardComponent;
  let fixture: ComponentFixture<GridProductCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridProductCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
