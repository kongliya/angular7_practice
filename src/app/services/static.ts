import { environment } from '../../environments/environment';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export const Static = {
    'baseUrl': environment.baseUrl,
    'http_header': { headers: new Headers({ 'Content-Type': 'application/json; charset=UTF-8', }) },

}
