import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@ax/shared';

import * as Components from './components';
import { effects, axialFeature, axialReducer } from './store';
import { AxialComponent } from './axial.component';
import { AxialRoutingModule } from './axial.routing';
import { TitleCasePipe } from '@angular/common';

const COMPONENTS = [
  AxialComponent,
  Components.GlyphComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    SharedModule,
    AxialRoutingModule,
    StoreModule.forFeature(axialFeature, axialReducer),
    EffectsModule.forFeature(effects),
  ],
  providers: [
    TitleCasePipe
  ],
  exports: [
    AxialComponent
  ]
})
export class AxialModule { }
