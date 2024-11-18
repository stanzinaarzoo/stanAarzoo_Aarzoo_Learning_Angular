import { Pipe, PipeTransform } from '@angular/core';
import { Product } from "../Shared/models/product";

@Pipe({
  name: 'productName',
  standalone: true
})
export class ProductNamePipe implements PipeTransform {

  transform(product: Product): string {
    return `${product.productName} by ${product.company} - Price: ${product.price}`;
  }

}
