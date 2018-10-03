import { TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Glyph } from '@ax/axial/models';

@Component({
  selector: 'ax-glyph-card',
  templateUrl: './glyph-card.component.html',
  styleUrls: ['./glyph-card.component.scss']
})
export class GlyphCardComponent {
  @Input() glyph: Glyph;
  @Input() color: string;

  constructor(private titleCase: TitleCasePipe) { }

  synonyms(): string {
    if (this.glyph.meanings.length <= 1) { return ''; }
    return this.glyph.meanings.slice(1).sort().map(this.titleCase.transform).join(', ');
  }
}
