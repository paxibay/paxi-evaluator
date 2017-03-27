import { AuctionComponent } from './component';

describe('AuctionComponent', () => {
  it('is successfully instantiated', () => {
      const app = new AuctionComponent();
      expect(app instanceof AuctionComponent).toEqual(true);
  });
});
