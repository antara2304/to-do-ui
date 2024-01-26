import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { HomeModule } from '@module/home/home.module';

const routes: Routes = [
  {
    path: 'sign-in',
    loadChildren: () =>
      import('@module/sign-in/sign-in.module').then((m) => m.SignInModule),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('@module/sign-up/sign-up.module').then((m) => m.SignUpModule),
  },
  {
    path: '',
    // component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('@module/home/home.module').then(
            (m): typeof HomeModule => m.HomeModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
