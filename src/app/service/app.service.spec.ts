import {TestBed} from '@angular/core/testing';
import {AppService} from './app.service';
import {HttpClient} from '@angular/common/http';

describe('AppService', () => {
  const mockHttpClient = {
    get: jest.fn()
  };

  let appService: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppService,
        { provide: HttpClient, useValue: mockHttpClient }
      ]
    });

    appService = TestBed.inject(AppService);
  });

  describe('#getData', () => {
    it('should call http get with expected url', () => {
      const expectedUrl = 'https://cat-fact.herokuapp.com/facts';

      appService.getData();

      expect(mockHttpClient.get).toHaveBeenCalledWith(expectedUrl);
    });
  });

});
