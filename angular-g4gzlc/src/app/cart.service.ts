import { Injectable } from '@angular/core';
import { Product } from './products.model.js';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { environment } from 'src/environments/environment.js';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string, price: number }[]>('/assets/shipping.json');
  }


  constructor(
    private http: HttpClient
  ) { }

}
