import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Glyph } from '@ax/axial/models';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'ax-glyph',
  templateUrl: './glyph.component.html',
  styleUrls: ['./glyph.component.scss']
})
export class GlyphComponent {
  @ViewChild('svg') svg: ElementRef<SVGElement>;
  @Input() glyph: Glyph | Glyph[];
  @Input() showGrid = false;

  constructor(private sanitizer: DomSanitizer) { }

  get title(): string {
    return this.glyphs.map(g => g.meanings[0]).join(' ');
  }

  get glyphs(): Glyph[] {
    if (!this.glyph) { return []; }
    if (Array.isArray(this.glyph)) {
      return this.glyph;
    } else {
      return [this.glyph];
    }
  }

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

  get svgData(): SafeResourceUrl {
    const svg = this.svg.nativeElement.innerHTML;
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/svg+xml;base64,' + btoa(svg));
  }

  get lines(): [number, number, number, number][] {
    const result: [number, number, number, number][] = [];
    this.glyphs.forEach(glyph => {
      glyph.lines.forEach(l => {
        result.push([
          this.nodes[l[0]][0],
          this.nodes[l[0]][1],
          this.nodes[l[1]][0],
          this.nodes[l[1]][1]
        ]);
      });
    });
    return result;
  }
}
