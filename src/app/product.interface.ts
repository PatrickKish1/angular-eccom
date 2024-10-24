export interface Cart {
    items: CartItem[];
  }
  
  export interface CartItem {
      id: number;
      name: string;
      description: string;
      price: number;
      quantity: number;
  }