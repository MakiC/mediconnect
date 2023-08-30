import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDefaultComponent } from './pages/page-default/page-default.component';
import { SecretaryIndexComponent } from './secretary/pages/secretary-index/secretary-index.component';
import { SecretaryModule } from './secretary/secretary.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { 
    path: '', component: AppComponent,  
    children: [
      { path: '', component: PageDefaultComponent, pathMatch: 'full' },
      { path: 'secretary', loadChildren: () => import('./secretary/secretary.module').then(m => m.SecretaryModule) },
      { path: '**', component: PageNotFoundComponent }
    ] 
  }  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
