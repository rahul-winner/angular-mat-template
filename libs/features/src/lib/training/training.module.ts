import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training.component';

const routes: Routes = [
  { path: '', component: TrainingComponent }
];

@NgModule({
  declarations: [
    TrainingComponent
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class TrainingModule { }
