import {async, TestBed} from '@angular/core/testing';

import {BodyComponent} from './body.component';
import {CatFact} from '../../model/cat_fact.model';
import {By} from '@angular/platform-browser';
import {SimpleChange} from '@angular/core';

describe('BodyComponent', () => {
  let component;
  let fixture;
  let debugElement;

  const mockCatFacts: CatFact[] = [
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
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  describe('#render', () => {
    it('should create body component', () => {
      expect(component).toBeTruthy();
    });

    it('should render given list of cat facts', () => {
      const expectedText = mockCatFacts[0].text;

      component.catFacts = mockCatFacts;
      fixture.detectChanges();
      const tableRow = debugElement.query(By.css('#cat-facts-table-body')).children[0];
      const actualText = tableRow.children[1].nativeElement.innerHTML;

      expect(actualText).toEqual(expectedText);
    });

    it('should render writer full name when rendered', () => {
      const userFirstName = mockCatFacts[0].user.name.first;
      const userLastName = mockCatFacts[0].user.name.last;
      const expectedName = `${userFirstName} ${userLastName}`;

      component.catFacts = mockCatFacts;
      fixture.detectChanges();
      const tableRow = debugElement.query(By.css('#cat-facts-table-body')).children[0];
      const actualRenderedName = tableRow.children[3].nativeElement.innerHTML;

      expect(actualRenderedName).toEqual(expectedName);
    });

    it('should render only top 10 cat facts', () => {
      const expectedLength = 10;

      component.catFacts = mockCatFacts;
      const simpleChange: SimpleChange = new SimpleChange([], mockCatFacts, false);
      component.ngOnChanges({ key: simpleChange });
      fixture.detectChanges();
      const actualDataLength = debugElement.query(By.css('#cat-facts-table-body')).children.length;

      expect(actualDataLength).toEqual(expectedLength);
    });
  });
});
