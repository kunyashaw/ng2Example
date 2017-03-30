import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// 创建这个服务之后，由于是要用到http，所以到modult.ts中，引入模块，并imports
// 在组件的构造函数中声明引入

@Injectable()
export class myHttpService {

    constructor(private http: Http) {
    }
    public speak = function(){
        console.log('..speak...');
    }
    sendGetRequest(url: string): Observable<any[]> {
        return this.http.get(url).map(this.handleSuccess).catch(this.handleError);
    }

    sendPostRequest(url: string, data: string): Observable<any[]> {
        let myHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({headers:myHeaders});
        return this.http.post(url, data,options).map(this.handleSuccess).catch(this.handleError);
    }

    private handleSuccess(res: Response) {
        // console.log(res);
        let body = res.json();
        return body;
    }
    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}