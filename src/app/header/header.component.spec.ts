import {async, TestBed} from '@angular/core/testing';
import {HeaderComponent} from './header.component';
import {AppComponent} from '../app.component';

describe('AppComponent', () => {
  let fixture;
  let debugElement;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
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
      const fixture = TestBed.createComponent(HeaderComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });
  });
});
