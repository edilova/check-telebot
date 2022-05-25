import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountConsistComponent } from './account-consist.component';

describe('AccountConsistComponent', () => {
  let component: AccountConsistComponent;
  let fixture: ComponentFixture<AccountConsistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountConsistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountConsistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
