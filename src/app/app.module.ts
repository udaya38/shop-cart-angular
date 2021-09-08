import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { DetailsComponent } from "./details/details.component";
import { CartService } from "./details/cart.service";
import { RouterModule, Routes } from "@angular/router";
import { CartcountComponent } from "./cartcount/cartcount.component";
import { HeaderComponent } from "./header/header.component";

const appRoutes: Routes = [
  { path: "", component: DetailsComponent },
  { path: "cart", component: CartcountComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    CartcountComponent,
    HeaderComponent
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule {}
