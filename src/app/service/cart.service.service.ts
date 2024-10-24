import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart: Cart = { items: [] };
  private _cart$ = new BehaviorSubject<Cart>(this._cart);
  public readonly cart$ = this._cart$.asObservable();

  constructor() { }

  addToCart(item: CartItem): void {
    const cartItem = this._cart.items.find(i => i.id === item.id)

    if (cartItem) cartItem.quantity += item.quantity;
    else this._cart.items.push(item);
    
    this._cart$.next(this._cart);
  }

  removeFromCart(id: number) {
    this._cart.items = this._cart.items.filter(cartItems => cartItems.id !== id);
    this._cart$.next(this._cart);
  }
}