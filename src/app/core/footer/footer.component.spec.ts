import {async, TestBed} from '@angular/core/testing';
import {FooterComponent} from './footer.component';
import {By} from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component;
  let fixture;
  let debugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('#render', () => {
    it('should create footer component', () => {
      expect(component).toBeTruthy();
    });

    it('should create h3 with footer value', () => {
      const expectedFooterValue = 'meow';

      const actualFooterValue = debugElement.query(By.css('h3')).nativeElement.innerHTML;

      expect(actualFooterValue).toEqual(expectedFooterValue);
    });
  });
});
