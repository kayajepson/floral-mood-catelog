import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { WelcomeComponent } from './welcome/welcome.component';
import { FlowerListComponent } from './flower-list/flower-list.component';
import { FlowerDetailComponent } from './flower-detail/flower-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: FlowerListComponent
  },
  {
    path: 'details/:id',
    component: FlowerDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
