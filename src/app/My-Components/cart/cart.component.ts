// cart.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[] = [ // Mocked cart items
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 10.99,
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
      imageUrl: 'https://via.placeholder.com/150'
    },
    // Add more mocked items as needed
  ];

  constructor() {}

  removeItem(item: any): void {
    // Logic to remove item from the cart
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }
}
