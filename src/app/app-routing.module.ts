import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guard/auth.guard';

import { PageDefaultComponent } from './pages/page-default/page-default.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { AppComponent } from './app.component';

const routes: Routes = [
  { 
    path: '', component: AppComponent,  
    children: [
      { path: '', component: PageDefaultComponent, pathMatch: 'full' },
      { 
        path: 'secretary', 
        canActivate: [AuthGuard], 
        data: { roles: ['SECRETARY'] }, 
        loadChildren: () => import('./secretary/secretary.module').then(m => m.SecretaryModule)
      },
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
