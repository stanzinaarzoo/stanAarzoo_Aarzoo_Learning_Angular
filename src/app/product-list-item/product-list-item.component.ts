import {Component, Input} from '@angular/core';
import {Product} from "../Shared/models/product";
import {CurrencyPipe, NgIf, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {ProductNamePipe} from "../pipes/product-name.pipe";
import {Router} from "express";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list-item',
  standalone: true,
  imports: [
    NgIf,
    CurrencyPipe,
    TitleCasePipe,
    UpperCasePipe,
    ProductNamePipe
  ],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.css'
})
export class ProductListItemComponent {
  @Input() product?: Product;

  constructor(private  router: Router,
              private  route: ActivatedRoute) {
  }
  editProduct(): void {
    // @ts-ignore
    this.route.navigate(['/product']);
  }
  onDelete(id: number): void {
    // @ts-ignore
    //this.router.navigate(['/product']);

  }
}
