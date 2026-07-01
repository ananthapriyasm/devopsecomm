import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../services/product';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
 products: any[] = [];

  constructor(private productService: Product) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      (data: any) => {
        this.products = data;
        console.log(data);
      }
    );
  }
}
