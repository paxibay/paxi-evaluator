import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ModuleIndex } from "./modules/index";

@NgModule({
    imports: [BrowserModule, ModuleIndex],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }