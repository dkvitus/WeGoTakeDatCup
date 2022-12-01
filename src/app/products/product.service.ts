import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError, map } from "rxjs";

import { IProduct } from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // If using Stackblitz, replace the url with this line
  // because Stackblitz can't find the api folder.
  // private productUrl = 'assets/products/products.json';
  private productUrl = 'api/products/products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  // Get one product
  // Since we are working with a json file, we can only retrieve all products
  // So retrieve all products and then find the one we want using 'map'
  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts()
      .pipe(
        map((products: IProduct[]) => products.find(p => p.productId === id))
      );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }


  /*

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MyService () {
    url: string = 'https://www.wellingtonsoccer.com/lib/api/auth.cfc?returnFormat=JSON&method=Authenticate';

    constructor (private http: HttpClient) { }

    sendPostRequest() {
         const headers = new HttpHeaders()
             .set('cache-control', 'no-cache')
             .set('content-type', 'application/json')
             .set('postman-token', 'b408a67d-5f78-54fc-2fb7-00f6e9cefbd1');

         const body = {
             email: 'myemail@xyz.com',
             user_password: 'mypasss',
             token: 'my token'
         }

         return this.http
                    .post(this.url, body, { headers: headers })
                    .subscribe(res => res.json);
    }       
}

  */
}
