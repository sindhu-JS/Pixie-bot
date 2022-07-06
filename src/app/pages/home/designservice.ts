import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { design } from './design';

@Injectable()
export class DesignService {



    productNames: string[] = [
        "Bamboo Watch", 
        "Black Watch", 
        "Bracelet", 
    ];

    constructor(private http: HttpClient) { }

    getProductsSmall() {
        return this.http.get<any>('/assets/images.json')
        .toPromise()
        .then(res => <design[]>res.data)
        .then(data => { return data; });
    }



    
}