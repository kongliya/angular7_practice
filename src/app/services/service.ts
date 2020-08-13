import { Injectable } from '@angular/core';
import { Static } from './static';

import { Http, Response, Headers } from '@angular/http';
@Injectable()

export class Service {
    constructor(private http: Http) { }
    //获取列表;
    getLists(): Promise<Response>{
        return this.http.get('http://dev.helloparkin.com:58090/api3/gy/order/getList')
        .toPromise()
        .then(res => res as Response)
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}