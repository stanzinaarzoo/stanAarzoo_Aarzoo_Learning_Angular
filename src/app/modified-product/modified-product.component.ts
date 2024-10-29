import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Product} from "../Shared/models/product";
import {ProductService} from "../services/product.service";
import {Router} from "express";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-modified-product',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modified-product.component.html',
  styleUrl: './modified-product.component.css'
})
export class ModifiedProductComponent {
  productForm: FormGroup;
  product: Product | undefined;

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
    this.productForm = this.fb.group({
      id: ['' , Validators.required],// id is required
      productName: ['', Validators.required],// Product is required
      vendor: ['', Validators.required],// vendor is required
      inStock: ['', Validators.required],// in-stock is required
      price: ['', Validators.required], // price is required
      company: ['', Validators.required], // company is required
    })
  }
  onSubmit() {
    const product: Product = this.productForm.value;
  if (product.id){
    this.productService.updateProduct(product);
  }  else {
    const newID = this.productService.generateNewId();
    product.id = newID;
    this.productService.addProduct(product);
  }
  }
  onDelete(): void {
    const id = this.productForm.get('id')?.value;
    if (id){
      this.productService.deleteProduct(id)
      //this.router.navigate(['/products']);
    }
  }
}
