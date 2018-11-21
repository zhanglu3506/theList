import { RedListModule } from './red-list.module';

describe('RedListModule', () => {
  let redListModule: RedListModule;

  beforeEach(() => {
    redListModule = new RedListModule();
  });

  it('should create an instance', () => {
    expect(redListModule).toBeTruthy();
  });
});
