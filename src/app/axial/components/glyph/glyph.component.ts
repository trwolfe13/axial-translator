import { Component, ElementRef, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { Glyph } from '@ax/axial/models';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'ax-glyph',
  templateUrl: './glyph.component.html',
  styleUrls: ['./glyph.component.scss']
})
export class GlyphComponent implements OnChanges {
  @Input() glyph: Glyph | Glyph[];
  @Input() showGrid = false;

  svg: SafeResourceUrl;

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


  ngOnChanges(changes: SimpleChanges) {
    if (changes['glyph']) { this.rebuildSvg(); }
  }

  createSVGElement(el: string, params: {}): SVGElement {
    const svgNs = 'http://www.w3.org/2000/svg';
    const element = document.createElementNS(svgNs, el);
    for (const p of Object.keys(params)) {
      element.setAttributeNS(null, p, params[p]);
    }
    return element;
  }

  rebuildSvg() {
    const newSvg = this.createSVGElement('svg', { viewBox: '0 0 100 100' });
    newSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.nodes.forEach(node => {
      const circle = this.createSVGElement('circle', { r: 2, cx: node[0], cy: node[1] });
      newSvg.appendChild(circle);
    });

    this.glyphs.forEach(glyph => {
      glyph.lines.forEach(l => {
        const line = this.createSVGElement('line', {
          x1: this.nodes[l[0]][0],
          y1: this.nodes[l[0]][1],
          x2: this.nodes[l[1]][0],
          y2: this.nodes[l[1]][1],
          stroke: 'black',
          'stroke-width': 4,
          'stroke-linecap': 'round'
        });
        newSvg.appendChild(line);
      });
    });

    this.svg = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/svg+xml;base64,' + btoa(newSvg.outerHTML));
  }

  get lines(): [number, number, number, number][] {
    const result: [number, number, number, number][] = [];

    return result;
  }
}
