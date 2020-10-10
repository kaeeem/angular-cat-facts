import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {CatFact} from './model/cat_fact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {}

  data: [CatFact];

  ngOnInit(): void {
    this.setupData();
  }

  private setupData(): void {
    this.appService.getData().subscribe( (response) => {
      this.data = response.data.all;
    });
  }
}
