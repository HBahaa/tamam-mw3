import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteOwnerComponent } from './invite-owner.component';

describe('InviteOwnerComponent', () => {
  let component: InviteOwnerComponent;
  let fixture: ComponentFixture<InviteOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
