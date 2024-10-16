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
    //Adding basic CRUD methods
    //Create: Add Product
    addProducts(newProduct:Product) : Observable<Product []> {
      this.products.push(newProduct)
      return of(this.products);
    }

    // Update an existing user
    updateProduct(updatedProduct: Product): Observable<Product[]> {
      const index = this.products.findIndex(product => product.id === updatedProduct.id);
      if (index !== -1) {
        this.products[index] = updatedProduct;
    }
      return of(this.products);
    }
    // Delete: Remove a user by ID
    deleteProduct(productId: number) : Observable<Product[]> {
      this.products = this.products.filter(product => product.id !== productId);
      return of(this.products);
    }
    getProductById(productId: number): Observable<Product | undefined> {
      const product = this.products.find(product => product.id === productId);
      return of(product);
    }
  }

function updateProduct(updatedProduct: any, User: any) {
    throw new Error('Function not implemented.');
}

