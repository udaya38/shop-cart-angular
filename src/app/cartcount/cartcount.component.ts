import { Component, OnDestroy, OnInit } from "@angular/core";

import { CartService } from "../details/cart.service";
@Component({
  selector: "app-cart",
  templateUrl: "./cartcount.component.html",
  styleUrls: ["./cartcount.component.css"]
})
export class CartcountComponent implements OnInit, OnDestroy {
  products: [];
  destrouyThis;
  constructor(private serve: CartService) {
    console.log("udaya");
  }
  ngOnInit() {
    this.products = this.serve.getCartItems();
    console.log(this.products);
    console.log(this.serve.getCartItems);
  }

  ngOnDestroy() {}

  remove(index: number) {
    console.log(index);
    this.products.splice(index, 1);
    console.log(this.products);
    this.serve.getCountReduce(this.products);
  }
}
