import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { CartService } from "./cart.service";
import { formatNumber } from "@angular/common";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  products: any;
  totalprice: any;
  load: boolean = false;
  constructor(private http: HttpClient, private serve: CartService) {}
  ngOnInit() {
    // const prod: any[] = fetch("https://fakestoreapi.com/products/")
    //   .then((data) => data.json())
    //   .catch((err) => err);
    // this.products = prod;
    // console.log(this.products.length);

    this.http
      .get("https://fakestoreapi.com/products/")
      .subscribe((response) => {
        console.log(response);
        this.products = response;
        setTimeout(() => {
          this.load = true;
        }, 2000);
      });
  }

  clicked(id: number, price: number) {
    console.log(id);
    const filt = this.products.find((e) => e.id === id);
    console.log(filt);
    this.totalprice += price;
    const num = formatNumber(Number(this.totalprice), "en-US", "1.0-0");
    console.log(num);
    this.serve.getItems(filt);
    this.serve.getCountIncrease();
  }
}
