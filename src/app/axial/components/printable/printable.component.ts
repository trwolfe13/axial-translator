import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Glyph } from '@ax/axial/models';
import { selectors } from '@ax/axial/store';
import { AppState } from '@ax/core/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ax-printable',
  templateUrl: './printable.component.html',
  styleUrls: ['./printable.component.scss'],
})
export class PrintableComponent {
  glyphs: Glyph[];

  constructor(private store: Store<AppState>, private titleCase: TitleCasePipe) {
    this.store.select(selectors.filteredGlyphs).subscribe(g => this.glyphs = g);
  }
}
