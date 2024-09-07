import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import localeDE from '@angular/common/locales/de'
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeDE, 'de-DE');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      useValue: 'de-DE'
    }
  ]
};
