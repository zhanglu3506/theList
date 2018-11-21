import { BlackListModule } from './black-list.module';

describe('BlackListModule', () => {
  let blackListModule: BlackListModule;

  beforeEach(() => {
    blackListModule = new BlackListModule();
  });

  it('should create an instance', () => {
    expect(blackListModule).toBeTruthy();
  });
});
