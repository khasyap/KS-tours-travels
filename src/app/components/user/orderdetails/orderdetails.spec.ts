import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderdetails } from './orderdetails';

describe('Orderdetails', () => {
  let component: Orderdetails;
  let fixture: ComponentFixture<Orderdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Orderdetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Orderdetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
