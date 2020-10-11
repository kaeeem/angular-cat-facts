import {Component, Input, OnChanges} from '@angular/core';
import {CatFact} from '../../model/cat_fact.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnChanges {
  @Input()
  catFacts: CatFact[];

  ngOnChanges(): void {
    this.catFacts = this.catFacts.slice(0, 10);
  }
}
