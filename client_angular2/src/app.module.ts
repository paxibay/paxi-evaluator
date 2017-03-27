import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AuctionModule } from "./modules/auction-module/module";

@NgModule({
    imports: [BrowserModule, AuctionModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }