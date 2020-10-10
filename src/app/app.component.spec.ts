import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {MockComponents} from 'ng-mocks';
import {HeaderComponent} from './header/header.component';
import {BodyComponent} from './body/body.component';

describe('AppComponent', () => {
  let fixture;
  let debugElement;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponents(HeaderComponent, BodyComponent)
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
      fixture.detectChanges();
      const compiledAppComponent = fixture.debugElement.nativeElement;
      expect(compiledAppComponent.querySelector('app-header')).not.toBe(null);
    });

    it('should render app body', () => {
      fixture.detectChanges();
      const compiledAppComponent = fixture.debugElement.nativeElement;
      expect(compiledAppComponent.querySelector('app-body')).not.toBe(null);
    });

    it('should render app footer', () => {
      fixture.detectChanges();
      const compiledAppComponent = fixture.debugElement.nativeElement;
      expect(compiledAppComponent.querySelector('app-footer')).not.toBe(null);
    });
  });
});
