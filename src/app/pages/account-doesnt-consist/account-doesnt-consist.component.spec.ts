import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDoesntConsistComponent } from './account-doesnt-consist.component';

describe('AccountDoesntConsistComponent', () => {
  let component: AccountDoesntConsistComponent;
  let fixture: ComponentFixture<AccountDoesntConsistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDoesntConsistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDoesntConsistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
