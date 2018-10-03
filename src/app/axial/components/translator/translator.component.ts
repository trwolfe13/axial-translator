import { Component } from '@angular/core';
import { Glyph } from '@ax/axial/models';
import { selectors } from '@ax/axial/store';
import { AppState } from '@ax/core/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ax-translator',
  templateUrl: './translator.component.html'
})
export class TranslatorComponent {
  translate: string;
  allGlyphs: Glyph[];

  constructor(private store: Store<AppState>) {
    this.store.select(selectors.allGlyphs).subscribe(g => this.allGlyphs = g);
  }

  get sentences(): string[] {
    return (this.translate || '').toLowerCase().split('.').filter(s => s);
  }

  glyphs(sentence: string): Glyph[] {
    const words = sentence.split(/\s+/).filter(n => n);
    return words.map(w => this.allGlyphs.find(g => g.meanings.includes(w))).filter(w => w);
  }
}
