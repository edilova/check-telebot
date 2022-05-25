import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCheckComponent } from './account-check.component';

describe('AccountCheckComponent', () => {
  let component: AccountCheckComponent;
  let fixture: ComponentFixture<AccountCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
