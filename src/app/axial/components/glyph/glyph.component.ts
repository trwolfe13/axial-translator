import { Component, Input } from '@angular/core';
import { Glyph } from '@ax/axial/models';

@Component({
  selector: 'ax-glyph',
  templateUrl: './glyph.component.html',
  styleUrls: ['./glyph.component.scss']
})
export class GlyphComponent {
  @Input() glyph: Glyph;

  // nodes: [number, number][] = [
  //   [50, 5],
  //   [27.5, 16.25],
  //   [72.5, 16.25],
  //   [5, 27.5],
  //   [50, 27.5],
  //   [95, 27.5],
  //   [27.5, 38.75],
  //   [72.5, 38.75],
  //   [5, 50],
  //   [50, 50],
  //   [95, 50],
  //   [27.5, 61.25],
  //   [72.5, 61.25],
  //   [5, 72.5],
  //   [50, 72.5],
  //   [95, 72.5],
  //   [27.5, 83.75],
  //   [72.5, 83.75],
  //   [50, 95],
  // ];

  nodes: [number, number][] = [
    [50, 5],
    [5, 27.5],
    [95, 27.5],
    [27.5, 38.75],
    [72.5, 38.75],
    [50, 50],
    [27.5, 61.25],
    [72.5, 61.25],
    [5, 72.5],
    [95, 72.5],
    [50, 95],
  ];

  get lines(): [number, number, number, number][] {
    const result = [];
    if (this.glyph) {
      let previousNode: number;
      this.glyph.symbol.forEach((n: number) => {
        if (previousNode !== undefined) {
          const line = [
            this.nodes[previousNode][0],
            this.nodes[previousNode][1],
            this.nodes[n][0],
            this.nodes[n][1]
          ];
          result.push(line);
        }
        previousNode = n;
      });
    }
    return result;
  }

  constructor() { }
}
