import { NgModule } from '@angular/core';

import { AuctionModule } from "./auction-module/auction.module";
import { AuctionComponent } from "./auction-module/auction.component";

import { ManagementModule } from "./management-module/management.module";
import { ManagementComponent } from "./management-module/management.component";

@NgModule({
    imports: [
        AuctionModule,
        ManagementModule
    ],
    exports: [AuctionComponent, ManagementComponent]
})
export class ModuleIndex { }