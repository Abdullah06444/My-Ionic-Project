import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment, appVersion } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//alert(appVersion.number + " tarih ise " + appVersion.time)

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
