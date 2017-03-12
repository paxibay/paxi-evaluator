import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from './main/app.module';
import { OnlineAuctionModule } from './modules/online-auction/online.auction.module';


if (webpack.ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(OnlineAuctionModule);
