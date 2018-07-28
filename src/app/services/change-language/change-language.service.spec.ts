import { TestBed, inject } from '@angular/core/testing';

import { ChangeLanguageService } from './change-language.service';

describe('ChangeLanguageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeLanguageService]
    });
  });

  it('should be created', inject([ChangeLanguageService], (service: ChangeLanguageService) => {
    expect(service).toBeTruthy();
  }));
});
