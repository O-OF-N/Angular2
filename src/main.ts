import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AskusGlobalAppComponent, environment } from './app/';

import {ROUTER_PROVIDERS} from '@angular/router-deprecated'

if (environment.production) {
  enableProdMode();
}

bootstrap(AskusGlobalAppComponent,[ROUTER_PROVIDERS]);
