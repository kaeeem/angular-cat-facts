import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AppService {
  constructor(private httpUtil: HttpClient) {}

  private url = 'https://cat-fact.herokuapp.com/facts';

  getData(): Observable<any> {
    return this.httpUtil.get(this.url);
  }
}
