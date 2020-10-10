import {async, TestBed} from '@angular/core/testing';
import {HeaderComponent} from './header.component';

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
    fixture = TestBed.createComponent(HeaderComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
  });

  describe('#render', () => {
    it('should create the app', () => {
      expect(component).toBeTruthy();
    });
  });
});
