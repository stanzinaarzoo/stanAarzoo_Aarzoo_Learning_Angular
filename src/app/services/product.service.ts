import { Injectable } from '@angular/core';
import { Product } from "../Shared/models/product";
import { products } from "../Shared/data/mock-content";
import { catchError, Observable, throwError, of } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'api/products'; // URL to web API
  private products: Product[] = products; // Local copy of product data for CRUD operations

  constructor(private http: HttpClient) { } // Dependency injection of HttpClient

  // CRUD operations using HTTP Requests
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }
  // Add
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product).pipe(catchError(this.handleError));
  }
  // update
  updateProduct(product: Product): Observable<Product | undefined> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(catchError(this.handleError));
  }
  // delete
  deleteProduct(id: number): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}
