import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@kat/shared';
import { CoreModule as AppCoreModule } from '@kat/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          {
            path: 'home',
            loadChildren: () =>
              import('./home/home.module').then((m) => m.HomeModule),
          },          
          {
            path: 'org',
            loadChildren: () =>
              import('./organization/organization.module').then(
                (m) => m.OrganizationModule
              ),
          },
          {
            path: 'training',
            loadChildren: () =>
              import('./training/training.module').then(
                (m) => m.TrainingModule
              ),
          }
        ]
      }
    ]),
    AppCoreModule.forChild(),
    SharedModule.forChild(),
  ],
  exports: [RouterModule]
})
export class FeaturesModule {}
