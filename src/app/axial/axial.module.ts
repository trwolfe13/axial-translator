import { TitleCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@ax/shared';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AxialRoutingModule } from './axial.routing';
import * as Components from './components';
import { axialFeature, axialReducer, effects } from './store';

const COMPONENTS = [
  Components.GlyphComponent,
  Components.GlyphCardComponent,
  Components.GlyphCardsComponent,
  Components.SearchComponent,
  Components.FilterComponent,
  Components.PrintableComponent,
  Components.RelatedComponent,
  Components.TranslatorComponent,
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
