import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLeftComponent } from './partials/menu-left/menu-left.component';
import { MenuTopComponent } from './partials/menu-top/menu-top.component';
import { DashboardComponent } from './pages/doctor/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLeftComponent,
    MenuTopComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
