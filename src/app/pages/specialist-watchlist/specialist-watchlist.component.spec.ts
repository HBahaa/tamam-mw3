import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistWatchlistComponent } from './specialist-watchlist.component';

describe('SpecialistWatchlistComponent', () => {
  let component: SpecialistWatchlistComponent;
  let fixture: ComponentFixture<SpecialistWatchlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialistWatchlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialistWatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
