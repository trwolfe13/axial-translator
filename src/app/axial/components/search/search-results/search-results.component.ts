import { Component } from '@angular/core';
import { Glyph } from '@ax/axial/models';
import { selectors } from '@ax/axial/store';
import { AppState } from '@ax/core/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'ax-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  glyphs: Observable<Glyph[]>;

  constructor(private store: Store<AppState>) {
    this.glyphs = this.store.select(selectors.filteredGlyphs);
  }
}
