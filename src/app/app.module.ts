import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import routeConfig from './routes';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HomeComponent, RouterModule.forRoot(routeConfig)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
