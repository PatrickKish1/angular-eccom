import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../service/cart.service.service';
import { Cart, CartItem } from '../product.interface';
import { tap } from 'rxjs';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ NgClass ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart: Cart = {
    items: []
  };
  isOpen: boolean = false;
  total: number = 0;

  cartContent$;

  constructor(private cartService: CartService) {
    this.cartContent$ = this.cartService.cart$
      .pipe(
        tap((cart: Cart) => this.total = cart.items.reduce((a, v) => a + v.quantity, 0))
      );

    this.cartContent$.subscribe((cart: Cart) => this.cart = cart);
  }

  toggleCart(): void {
    this.isOpen = !this.isOpen;
  }

  removeFromCart(id: number): void {
    this.cartService.removeFromCart(id);
  }
}