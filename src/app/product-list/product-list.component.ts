import {Component, OnInit} from '@angular/core';
import {Product} from "../Shared/models/product";
import {NgForOf} from "@angular/common";
import {ProductListItemComponent} from "../product-list-item/product-list-item.component";
import {ProductService} from "../services/product.service";
import {Router} from "express";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    NgForOf,
    ProductListItemComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
products: Product[]=[]; // for the storage for future
  constructor(private productService: ProductService,
              private route: Router) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (data: Product[]) => this.products = data,
      error: (error: Error) => console.log("Error fetching" ,error),
      complete: () => console.log("Data fetching complete!")
    })
  }

}
