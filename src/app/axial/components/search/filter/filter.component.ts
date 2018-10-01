import { Component } from '@angular/core';
import { selectors, SetFilter } from '@ax/axial/store';
import { AppState } from '@ax/core/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ax-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent {
  filter: string;
  constructor(private store: Store<AppState>) {
    this.store.select(selectors.filter).subscribe(f => this.filter = f);
  }

  setFilter(event: Event) {
    this.store.dispatch(new SetFilter((<HTMLInputElement>event.target).value));
  }
}
