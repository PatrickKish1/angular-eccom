import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { CartComponent } from '../cart/cart.component';

const menuList = [ 'Collections', 'Men', 'Women', 'About', 'Contact' ];

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ CommonModule, CartComponent ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})


export class MenuComponent {
  isOpen: boolean = false;
  menuItems = menuList;
  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
}