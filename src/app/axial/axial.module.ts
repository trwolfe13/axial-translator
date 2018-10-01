import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@ax/shared';

import * as Components from './components';
import { effects, axialFeature, axialReducer } from './store';
import { AxialRoutingModule } from './axial.routing';
import { TitleCasePipe } from '@angular/common';

const COMPONENTS = [
  Components.GlyphComponent,
  Components.SearchComponent,
  Components.FilterComponent,
  Components.SearchResultsComponent,
  Components.SearchResultComponent,
  Components.RelatedComponent
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
  ]
})
export class AxialModule { }
