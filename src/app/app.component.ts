import {Component, OnInit} from '@angular/core';
import {AppService} from './service/app.service';
import {CatFact} from './model/cat_fact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ AppService ]
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {}

  data: [CatFact?];
  title: string;

  ngOnInit(): void {
    this.setupData();
  }

  private setupData(): void {
    this.appService.getData().subscribe( (response) => {
      this.data = response.all;
      this.title = 'Cat Facts';
    }, (error) => {
      this.data = [];
      this.title = `${error.errorCode} - ${error.errorMessage}`;
    });
  }
}
