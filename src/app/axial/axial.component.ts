import { Component, Injector, InjectionToken } from '@angular/core';
import { Glyph } from '@ax/axial/models';
import { LoadGlyphs, selectors } from '@ax/axial/store';
import { AppState } from '@ax/core/store';
import { Store } from '@ngrx/store';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'ax-axial',
  templateUrl: './axial.component.html',
  styleUrls: ['./axial.component.scss']
})
export class AxialComponent {
  glyphs: Glyph[] = [];

  constructor(private store: Store<AppState>, private titleCase: TitleCasePipe) {
    this.store.dispatch(new LoadGlyphs());
    this.store.select(selectors.glyphs).subscribe(g => this.glyphs = g);
  }

  synonyms(glyph: Glyph): string {
    if (glyph.meanings.length <= 1) { return ''; }

    return glyph.meanings.slice(1).sort().map(this.titleCase.transform).join(', ');
  }
}
