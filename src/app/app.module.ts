import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, TitleStrategy } from '@angular/router';
import { TemplatePageTitleStrategy } from './shared/utils/page-title-strategy';
import { SharedModule } from './shared/shared.module';
import { PageDefaultComponent } from './pages/page-default/page-default.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ApplicationService } from './shared/services/application.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './service/auth.service';
import { ApiService } from './service/api.service';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    PageDefaultComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule,
    HttpClientModule,

    SharedModule,
    RouterModule
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: TokenInterceptor, 
      multi: true 
    },  
    
    { 
      provide: TitleStrategy,
      useClass: TemplatePageTitleStrategy
    },
    
    ApplicationService,

    ApiService,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
