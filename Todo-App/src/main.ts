import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


//uygulama ayağa kaldırıldığında çalışıcak olan modul
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
