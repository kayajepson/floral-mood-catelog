import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FlowerListComponent } from './flower-list/flower-list.component';
import { FlowerDetailComponent } from './flower-detail/flower-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: FlowerListComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'details/:id',
    component: FlowerDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
