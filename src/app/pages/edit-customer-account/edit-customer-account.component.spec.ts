import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustomerAccountComponent } from './edit-customer-account.component';

describe('EditCustomerAccountComponent', () => {
  let component: EditCustomerAccountComponent;
  let fixture: ComponentFixture<EditCustomerAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCustomerAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCustomerAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
