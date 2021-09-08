import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CartService {
  listner: Subject<number> = new Subject<number>();
  public count: number = 0;
  private products = [];

  getItems(items: {}) {
    this.products.push(items);
    console.log(this.products);
  }

  getCountReduce(prod: []) {
    this.count--;
    this.listner.next(this.count);
    this.products = prod;
  }

  getCountIncrease() {
    this.count++;
    console.log("countIncreases");
    this.listner.next(this.count);
  }

  getCartItems() {
    return this.products.slice();
  }
}
