import {Component, Input, OnInit} from '@angular/core';
import {CatFact} from '../../model/cat_fact.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  @Input()
  catFacts: [CatFact];

  ngOnInit(): void {
  }

}
