import { TestBed } from '@angular/core/testing';

import { JrSideMenuService } from './jr-side-menu.service';

describe('JrSideMenuService', () => {
  let service: JrSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JrSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
