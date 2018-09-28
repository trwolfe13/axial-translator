import { Component } from '@angular/core';
import { Glyph } from '@ax/axial/models';
import { LoadGlyphs, selectors } from '@ax/axial/store';
import { AppState } from '@ax/core/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ax-axial',
  templateUrl: './axial.component.html',
  styleUrls: ['./axial.component.scss']
})
export class AxialComponent {
  glyphs: Glyph[] = [];

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new LoadGlyphs());
    this.store.select(selectors.glyphs).subscribe(g => this.glyphs = g);
  }
}
