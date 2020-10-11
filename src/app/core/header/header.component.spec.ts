import {async, TestBed} from '@angular/core/testing';
import {HeaderComponent} from './header.component';
import {By} from '@angular/platform-browser';

describe('HeaderComponent', () => {
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
    fixture.detectChanges();
  });

  describe('#render', () => {
    it('should create app header', () => {
      expect(component).toBeTruthy();
    });

    it('should create h1 with given title', () => {
      const expectedTitle = 'Cat Facts';

      component.title = expectedTitle;
      fixture.detectChanges();
      const actualTitle = debugElement.query(By.css('h1')).nativeElement.innerHTML;

      expect(actualTitle).toEqual(expectedTitle);
    });
  });
});
