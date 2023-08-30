import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, TitleStrategy } from '@angular/router';
import { TemplatePageTitleStrategy } from './shared/utils/page-title-strategy';
import { SharedModule } from './shared/shared.module';
import { PageDefaultComponent } from './pages/page-default/page-default.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ApplicationService } from './shared/services/application.service';

@NgModule({
  declarations: [
    AppComponent,
    PageDefaultComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule
  ],
  providers: [
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
    ApplicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
