import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobWatchlistComponent } from './job-watchlist.component';

describe('JobWatchlistComponent', () => {
  let component: JobWatchlistComponent;
  let fixture: ComponentFixture<JobWatchlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobWatchlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobWatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
