import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { StartModule } from './features/start/start.module';
import { LegalModule } from './features/legal/legal.module';
import { NavigationComponent } from './navigation/navigation.component';
import { CustomerModule } from './features/customer/customer.module';
import { registerLocaleData } from '@angular/common';

import localeDE from '@angular/common/locales/de'
registerLocaleData(localeDE, 'de-DE');

@NgModule({
  declarations: [
    AppComponent,
    DefaultPageComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    // Feature Module
    StartModule,
    LegalModule,
    //HelpModule,
    CustomerModule,
    //Basic Routing
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'de-DE'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
