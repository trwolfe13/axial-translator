import { Component } from '@angular/core';
import { LoadGlyphs } from '@ax/axial/store';
import { AppState } from '@ax/core/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ax-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(store: Store<AppState>) {
    store.dispatch(new LoadGlyphs());
  }
}
