import { Injectable } from '@angular/core';
import { Statics } from './static';

import { Http, Response } from '@angular/http';
@Injectable()

export class Service {
    constructor(
        private http: Http
    ) { }
    //获取列表;
    getLists(query): Promise<Response> {
        return this.http.post(
            '/api3/coupon/list',
            JSON.stringify(query),
            Statics.http_header)
            .toPromise()
            .then(res => res as Response)
            .catch(this.handleError);
    }
    // get 请求模版;
    // getLists(): Promise<Response>{
    //     return this.http.get('order/getList')
    //     .toPromise()
    //     .then(res => res as Response)
    //     .catch(this.handleError);
    // }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}