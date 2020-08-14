import { environment } from '../../environments/environment';

import { Injectable } from '@angular/core';

import {Headers} from '@angular/http';

// @Injectable({
//     providedIn: 'root'
// })
export const Statics = {
    'baseUrl': environment.baseUrl,
    'http_header': { headers: new Headers({ 'Content-Type': 'application/json; charset=UTF-8', }) },

}
