import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AskusGlobalAppComponent } from '../app/askus-global.component';

beforeEachProviders(() => [AskusGlobalAppComponent]);

describe('App: AskusGlobal', () => {
  it('should create the app',
      inject([AskusGlobalAppComponent], (app: AskusGlobalAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'askus-global works!\'',
      inject([AskusGlobalAppComponent], (app: AskusGlobalAppComponent) => {
    expect(app.title).toEqual('askus-global works!');
  }));
});
