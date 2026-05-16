import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  price: number;
  image: string;
  description: string;
}

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css'
})
export class ProductsPage {
  products: Product[] = [
    {
      name: 'Beverages',
      price: 10,
      image: '/assets/images/beverages.png',
      description: 'Fresh drinks and everyday beverages.'
    },
    {
      name: 'Condiments',
      price: 5,
      image: '/assets/images/condiments.png',
      description: 'Sauces and seasonings for your meals.'
    },
    {
      name: 'Confections',
      price: 15,
      image: '/assets/images/confections.png',
      description: 'Sweet treats and delicious snacks.'
    },
    {
      name: 'Dairy Products',
      price: 10,
      image: '/assets/images/dairy.png',
      description: 'Milk, cheese, and other dairy items.'
    },
    {
      name: 'Grains/Cereals',
      price: 5,
      image: '/assets/images/grains.png',
      description: 'Breakfast cereals and grain products.'
    }
  ];

  selectedProduct: Product = this.products[0];

  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }
}