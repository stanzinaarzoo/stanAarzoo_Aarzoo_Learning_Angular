import {Component, Input} from '@angular/core';
import {Product} from "../Shared/models/product";
import {CurrencyPipe, NgIf, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {ProductNamePipe} from "../pipes/product-name.pipe";

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


}
