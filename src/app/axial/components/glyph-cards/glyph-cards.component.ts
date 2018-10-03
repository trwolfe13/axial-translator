import { Component, Input } from '@angular/core';
import { Glyph } from '@ax/axial/models';

@Component({
  selector: 'ax-glyph-cards',
  templateUrl: './glyph-cards.component.html',
  styleUrls: ['./glyph-cards.component.scss']
})
export class GlyphCardsComponent {
  @Input() glyphs: Glyph[];
  @Input() color: string;
}
