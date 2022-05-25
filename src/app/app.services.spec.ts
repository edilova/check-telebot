import { TestBed } from '@angular/core/testing';

import { App.ServicesService } from './app.services.service';

describe('App.ServicesService', () => {
  let service: App.ServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(App.ServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
