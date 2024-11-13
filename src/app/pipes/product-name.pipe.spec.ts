import { ProductNamePipe } from './product-name.pipe';

describe('ProductPipe', () => {
  it('create an instance', () => {
    const pipe = new ProductNamePipe();
    expect(pipe).toBeTruthy();
  });
});
