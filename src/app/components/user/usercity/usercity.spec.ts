import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usercity } from './usercity';

describe('Usercity', () => {
  let component: Usercity;
  let fixture: ComponentFixture<Usercity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Usercity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usercity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
