import { TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Glyph } from '@ax/axial/models';

@Component({
  selector: 'ax-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {
  @Input() glyph: Glyph;

  constructor(private titleCase: TitleCasePipe) { }

  synonyms(): string {
    if (this.glyph.meanings.length <= 1) { return ''; }
    return this.glyph.meanings.slice(1).sort().map(this.titleCase.transform).join(', ');
  }
}
