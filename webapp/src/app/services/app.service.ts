import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Product } from './../models/Product'; 

@Injectable()
export class AppService {
    constructor(private http: Http) {

    }

    private url = 'https://loja.eudora.com.br/produto/sku/325';

    get(): Observable<Product[]> {
        return this.http.get(this.url)
                .map((res : Response) => res.json())
                .catch((error: any) => Observable.throw(error.json()))

    }
}