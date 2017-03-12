import { NgModule } from '@angular/core';

import { OnlineAuctionModule } from '../modules/online-auction/online.auction.module';

@NgModule({
  imports: [OnlineAuctionModule.forRoot()],
  exports: [OnlineAuctionModule]
})
export class AppModule {
}