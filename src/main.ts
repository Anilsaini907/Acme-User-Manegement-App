import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';

import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
   ...appConfig,
  providers: [
    
     ...(appConfig.providers || []),
    importProvidersFrom(HttpClientModule), // ⬅ this is important
    provideRouter(routes)
  ]
})
  .catch((err) => console.error(err));
