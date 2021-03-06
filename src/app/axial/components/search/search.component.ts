import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Glyph } from '@ax/axial/models';
import { selectors } from '@ax/axial/store';
import { AppState } from '@ax/core/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ax-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  glyphs: Glyph[];

  constructor(private store: Store<AppState>, private titleCase: TitleCasePipe) {
    this.store.select(selectors.filteredGlyphs).subscribe(g => this.glyphs = g);
  }
}
