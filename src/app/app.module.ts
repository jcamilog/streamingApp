import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-f5d6z0e9.us.auth0.com',
      clientId: 'DSeebuQkDc6LTEN7FyArm7o24bjPkPVQ',
      cacheLocation: 'localstorage',
      useRefreshTokens: true 
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
