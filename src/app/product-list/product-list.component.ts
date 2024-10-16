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


}
