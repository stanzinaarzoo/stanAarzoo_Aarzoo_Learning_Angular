import { Component } from '@angular/core';
import {Product} from "../Shared/models/product";
import {NgForOf} from "@angular/common";
import {ProductListItemComponent} from "../product-list-item/product-list-item.component";

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
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      productName: "Desktop",
      company: "Dell",
      vendor: "js tech sol",
      price: 1000,
      inStock: false
    },
    {
      id: 2,
      productName: "iphone 11",
      company: "apple",
      vendor: "Mobile LLP",
      price: 1100,
      inStock: false
    },
    {
      id: 3,
      productName: "Airpods",
      company: "apple",
      vendor: "SoundZone",
      price: 130,
      inStock: true
    },
    {
      id: 4,
      productName: "Monitor",
      company: "LG",
      vendor: "led and sons",
      price: 100,
      inStock: false
    },
    {
      id: 5,
      productName: "Mouse",
      company: "dell",
      vendor: "BBT",
      price: 10,
      inStock: true
    }
  ];

}
