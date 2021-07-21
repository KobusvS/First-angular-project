import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../products.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Product[];
  
  constructor(
    private _http: HttpClient
  ){
    this.products = [];
    
  }
  ngOnInit():void{
    // const httpHeaders= new HttpHeaders()
    // console.log('httpHeaders: ', httpHeaders);

    // httpHeaders= httpHeaders.append({"Content-Type", "application/json"})
    const url = environment.productsURL;
    const productsHttpCall=this._http.get(url, {responseType:"text"});

    productsHttpCall.subscribe((payload)=>{
      this.products= JSON.parse(payload)
      
    })
  }

  onShareClick() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


