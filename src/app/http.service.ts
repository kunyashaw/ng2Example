import { Injectable } from '@angular/core';
import { Http, Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class HttpService {
  constructor (private http: Http) {}

  sendRequest (url:string): Observable<any[]> {
    return this.http.get(url)
      .map((response: Response) => response.json());
  }

}


