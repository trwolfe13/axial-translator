import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AxialComponent } from './axial.component';

const axialRoutes: Routes = [
  { path: '', component: AxialComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(axialRoutes)
  ],
  exports: [RouterModule]
})
export class AxialRoutingModule { }
