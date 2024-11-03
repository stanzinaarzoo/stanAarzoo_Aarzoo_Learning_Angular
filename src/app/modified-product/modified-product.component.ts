import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ProductService } from '../services/product.service'; // Adjust the path if needed
import { Product } from '../Shared/models/product';

@Component({
  selector: 'app-modified-product',
  templateUrl: './modified-product.component.html',
  styleUrls: ['./modified-product.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule
  ]
})
export class ModifiedProductComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) {
    // Initialize the reactive form
    this.productForm = this.fb.group({
      id: [null, [Validators.required]], // Use null for optional
      productName: ['', Validators.required],
      company: ['', Validators.required],
      vendor: ['', Validators.required],
      inStock: [false],
      price: [null, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    // Optionally, fetch products or initialize the form with existing product data here
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const product: Product = this.productForm.value;
      this.productService.addProducts(product).subscribe((updatedProducts) => {
        console.log('Product added:', product);
        this.productForm.reset(); // Reset the form after submission
      });
    }
  }

  onDelete(): void {
    const productId = this.productForm.get('id')?.value;
    if (productId) {
      this.productService.deleteProduct(productId).subscribe((updatedProducts) => {
        console.log('Product deleted with ID:', productId);
        this.productForm.reset(); // Reset the form after deletion
      });
    }
  }
}
