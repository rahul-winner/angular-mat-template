import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UnitServiceComponent } from './unit-service/unit-service.component';
import { OrgDashboardComponent } from '../org-dashboard/org-dashboard.component';
import { OrgnaziationStructureResolver } from './services/orgnaziation-structure.resolver';


const orgRoutes: Routes = [
  {
    path: '',
    component: OrgDashboardComponent,
    resolve: {
      org: OrgnaziationStructureResolver
    },
    children: [
      { path: 'unit-service', component: UnitServiceComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(orgRoutes)
  ],
  exports: [RouterModule]
})
export class OrgRoutingModule { }