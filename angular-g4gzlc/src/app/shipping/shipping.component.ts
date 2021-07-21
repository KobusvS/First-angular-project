import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
interface ShippingPrice { type: string, price: number }
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {


  // shippingCosts = this.cartService.getShippingPrices();
  shippingCosts: ShippingPrice[]

  constructor(
    private cartService: CartService,
    private _http: HttpClient
  ) {
    this.shippingCosts = []
  }

  ngOnInit(): void {

    const url = environment.shippingURL;
    const shippingHttpCall = this._http.get(url, { responseType: "text" });

    shippingHttpCall.subscribe((payload) => {
      this.shippingCosts = JSON.parse(payload)
      console.log(payload)
    })
  }
}
