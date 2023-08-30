import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SecretaryIndexComponent } from './pages/secretary-index/secretary-index.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { DoctorRegisterComponent } from './pages/doctor-register/doctor-register.component';
import { MenuLeftComponent } from './partials/menu-left/menu-left.component';
import { MenuTopComponent } from './partials/menu-top/menu-top.component';

const routes: Routes = [
  { 
    path: '', component: SecretaryIndexComponent,  
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'doctor-register', component: DoctorRegisterComponent }
    ] 
  }  
];

@NgModule({
  declarations: [
    DashboardComponent,
    SecretaryIndexComponent,
    MenuLeftComponent,
    MenuTopComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class SecretaryModule { }
