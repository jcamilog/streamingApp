import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@auth0/auth0-angular';
import { AuthGuard as AuthGuardLogin} from '@utils/auth.guard';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    canActivate: [AuthGuardLogin],
    loadChildren: () => import ('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        canActivate: [AuthGuard],
        loadChildren: () => import ('./home/home.module').then(m => m.HomeModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
