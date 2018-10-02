import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelatedComponent } from '@ax/axial/components';
import { SearchComponent } from '@ax/axial/components/search';
import { TranslatorComponent } from '@ax/axial/components/translator';

const axialRoutes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'related/:glyph', component: RelatedComponent },
  { path: 'translate', component: TranslatorComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(axialRoutes)
  ],
  exports: [RouterModule]
})
export class AxialRoutingModule { }
