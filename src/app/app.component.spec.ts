import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {MockComponents} from 'ng-mocks';
import {HeaderComponent} from './header/header.component';
import {BodyComponent} from './body/body.component';
import {FooterComponent} from './footer/footer.component';
import {of} from 'rxjs';
import {AppService} from './app.service';

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
        { provide: AppService, useValue: mockAppService }
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
    mockAppService.getData.mockReturnValue(of(MOCK_DATA_RESPONSE));
  });

  describe('#render', () => {
    it('should create the app', () => {
      expect(component).toBeTruthy();
    });

    it('should render app header', () => {
      fixture.detectChanges();
      const compiledAppComponent = fixture.debugElement.nativeElement;

      expect(compiledAppComponent.querySelector('app-header')).not.toBe(null);
    });

    it('should render app body', () => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const compiledAppComponent = fixture.debugElement.nativeElement;

        expect(compiledAppComponent.querySelector('app-body')).not.toBe(null);
      });
    });

    it('should render app footer', () => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const compiledAppComponent = fixture.debugElement.nativeElement;

        expect(compiledAppComponent.querySelector('app-footer')).not.toBe(null);
      });
    });
  });

  describe('#onInit', () => {
    it('should setup data when initiated', () => {
      const expectedData = MOCK_DATA_RESPONSE.data.all;

      fixture.detectChanges();

      expect(mockAppService.getData).toHaveBeenCalled();
      expect(component.data).toEqual(expectedData);
    });

    it('should assign title when fetch data success', () => {
      const expectedTitle = 'Cat Facts';

      fixture.detectChanges();

      expect(component.title).toEqual(expectedTitle);
    });
  });
});
