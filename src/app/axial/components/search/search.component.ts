import { Component } from '@angular/core';
import { selectors, SetFilter } from '@ax/axial/store';
import { AppState } from '@ax/core/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ax-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  filter: string;
  constructor(private store: Store<AppState>) {
    this.store.select(selectors.filter).subscribe(f => this.filter = f);
  }

  setFilter(event: Event) {
    this.store.dispatch(new SetFilter((<HTMLInputElement>event.target).value));
  }
}
