import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css'
})
export class ProductsPage {
  products = [
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

  selectedProduct = this.products[0];

  selectProduct(product: any) {
    this.selectedProduct = product;
  }
}