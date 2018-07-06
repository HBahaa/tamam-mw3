import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowCommunityWorkComponent } from './how-community-work.component';

describe('HowCommunityWorkComponent', () => {
  let component: HowCommunityWorkComponent;
  let fixture: ComponentFixture<HowCommunityWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowCommunityWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowCommunityWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
