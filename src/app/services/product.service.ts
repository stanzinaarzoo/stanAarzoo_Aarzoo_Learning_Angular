import { Injectable } from '@angular/core';
import {Product} from "../Shared/models/product";
import {products} from "../Shared/data/mock-content";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = products; //local copy
  constructor() { }

  getProducts() : Observable<Product[]> {
    return of(this.products);

  }
}
