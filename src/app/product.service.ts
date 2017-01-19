import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {
  products: Product[];

  constructor() { 
    this.products = [
      new Product(1, "Keyboard", "Corsair", 129.99, 500),
      new Product(2, "Mouse", "Corsair", 59.99, 500),
      new Product(3, "Keyboard", "Das", 169.99, 500),
      new Product(3, "Mouse", "Das", 89.99, 500)
    ]
    console.log(this.products)
  }

  create(product: Product){
    this.products.push(product);
  }

  destroy(product: Product){
    const i = this.products.indexOf(product);
    console.log(this.products.splice(i, 1));
  }


}
