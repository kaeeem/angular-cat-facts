import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {MockComponents} from 'ng-mocks';
import {HeaderComponent} from './core/header/header.component';
import {BodyComponent} from './core/body/body.component';
import {FooterComponent} from './core/footer/footer.component';
import {of, throwError} from 'rxjs';
import {AppService} from './service/app.service';

describe('AppComponent', () => {
  let fixture;
  let debugElement;
  let component;

  const MOCK_DATA_RESPONSE = {
    data: {
      all: [
        {
          _id: '12345',
          text: 'Meow',
          type: 'cat',
          user: {
            _id: '123',
            name: {
              first: 'John',
              last: 'Doe',
            },
          },
          upvotes: 1,
          userUpvoted: null,
        },
      ],
    }
  };
  const mockAppService = {
    getData: jest.fn(),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: AppService, useValue: mockAppService}
      ],
      declarations: [
        AppComponent,
        MockComponents(HeaderComponent, BodyComponent, FooterComponent)
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
  });

  describe('#render', () => {
    it('should create the app', () => {
      expect(component).toBeTruthy();
    });

    it('should render app header', () => {
      const compiledAppComponent = fixture.debugElement.nativeElement;

      expect(compiledAppComponent.querySelector('app-header')).not.toBe(null);
    });

    it('should render app body', () => {
      const compiledAppComponent = fixture.debugElement.nativeElement;

      expect(compiledAppComponent.querySelector('app-body')).not.toBe(null);
    });

    it('should render app footer', () => {
      const compiledAppComponent = fixture.debugElement.nativeElement;

      expect(compiledAppComponent.querySelector('app-footer')).not.toBe(null);
    });
  });

  describe('#onInit', () => {
    it('should call get data when initiated', () => {
      _simulateSuccessSetup();

      expect(mockAppService.getData).toHaveBeenCalled();
    });

    it('should setup data when get data success', () => {
      const expectedData = MOCK_DATA_RESPONSE.data.all;
      _simulateSuccessSetup();

      expect(component.data).toEqual(expectedData);
    });

    it('should assign title when get data success', () => {
      const expectedTitle = 'Cat Facts';
      _simulateSuccessSetup();

      expect(component.title).toEqual(expectedTitle);
    });

    it('should set data to empty string when get data failed', () => {
      const expectedData = [];
      _simulateFailedSetup();

      expect(component.data).toEqual(expectedData);
    });

    it('should set title to error details when get data failed', () => {
      const expectedTitle = '500 - Internal server error.';
      _simulateFailedSetup();

      expect(component.title).toEqual(expectedTitle);
    });
  });

  function _simulateSuccessSetup(): void {
    mockAppService.getData.mockReturnValue(of(MOCK_DATA_RESPONSE));
    fixture.detectChanges();
  }

  function _simulateFailedSetup(): void {
    const errorResponse = {
      errorCode: '500',
      errorMessage: 'Internal server error.',
    };
    mockAppService.getData.mockReturnValueOnce(throwError(errorResponse));
    fixture.detectChanges();
  }
});
