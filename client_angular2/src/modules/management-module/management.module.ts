import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ManagementComponent } from "./management.component";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [ManagementComponent],
    exports: [ManagementComponent]
})
export class ManagementModule { }