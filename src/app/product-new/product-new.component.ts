import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  newProduct: Product = new Product();

  constructor(private productService: ProductService) { }

  ngOnInit() { }

  create(){
    this.productService.create(this.newProduct);
    this.newProduct = new Product();
  
  }

}
