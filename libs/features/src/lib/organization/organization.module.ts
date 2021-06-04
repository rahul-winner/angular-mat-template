import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitServiceComponent } from './unit-service/unit-service.component';
import { OrgRoutingModule } from './organization-routing.module';
import { OrgDashboardComponent } from '../org-dashboard/org-dashboard.component';
import { OrgnaziationStructureResolver } from './services/orgnaziation-structure.resolver';
import { OrgDataService } from './services/org-data.service';

@NgModule({
  declarations: [
    UnitServiceComponent,
    OrgDashboardComponent
  ],
  imports: [
    CommonModule,
    OrgRoutingModule
  ],
  providers: [
    OrgDataService,
    OrgnaziationStructureResolver
  ]
})
export class OrganizationModule { }
