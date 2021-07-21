import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product
  //, products
 } from '../products.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product|undefined;

  addToCart(product : Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  constructor(
    private route : ActivatedRoute,
    private cartService : CartService,
  ) { }

  ngOnInit() {

    const routeParam = this.route.snapshot.paramMap;
    
    const productIdFromRoute =Number(routeParam.get('productId'));
    
    // this.product = products.find(product => product.id === productIdFromRoute);
  }

}
