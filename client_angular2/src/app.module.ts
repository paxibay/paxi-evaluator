import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import {
    AuctionModuleIndex,
    ManagementModuleIndex
} from "./modules/index";

@NgModule({
    imports: [BrowserModule, AuctionModuleIndex],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }