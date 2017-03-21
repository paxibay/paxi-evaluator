import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
//import { ModelModule } from "../model/model.module";
import { AuctionComponent } from "./auction.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AuctionComponent],
    exports: [AuctionComponent]
})

export class AuctionModule { }