import { Component } from '@angular/core';
import { Glyph } from '@ax/axial/models';
import { selectors } from '@ax/axial/store';
import { AppState } from '@ax/core/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ax-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  glyphs: Glyph[];
  displayMode = 'grid';
  displayModes: {}[] = [
    { value: 'list', icon: 'fa-list' },
    { value: 'grid', icon: 'fa-th' }
  ];

  constructor(private store: Store<AppState>) {
    this.store.select(selectors.filteredGlyphs).subscribe(g => this.glyphs = g);
  }

  choose(option) {
    this.displayMode = option.value;
    console.log('facer');
  }
}
