import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CartService } from "../details/cart.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  count: number = 0;
  destroy: Subscription;
  constructor(private serve: CartService) {}
  ngOnInit() {
    this.destroy = this.serve.listner.subscribe((data) => {
      this.count = data;
    });
  }

  ngOnDestroy() {
    this.destroy.unsubscribe();
  }
}
