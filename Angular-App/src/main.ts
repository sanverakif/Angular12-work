import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


//angular ayağa kalkarken hangi modulle kalkıcağını belirtiriz. modullere bağlı componentler iş sağlar.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
