import { Glyph } from '@ax/axial/models';
import * as _ from 'lodash';

export function expandLines(glyph: number[]): [number, number][] {
  const lines: [number, number][] = [];
  let previous: number;
  glyph.forEach(n => {
    if (previous !== undefined) {
      lines.push([previous, n]);
    }
    previous = n;
  });
  return lines;
}

function areEqual(glyph1: [number, number][], glyph2: [number, number][]): boolean {
  const g1 = _.sortBy(glyph1, 0, 1);
  const g2 = _.sortBy(glyph2, 0, 1);
  const g3 = _.sortBy(glyph2.map(g => [g[1], g[0]]), 0, 1);

  return _.isEqual(g1, g2) || _.isEqual(g1, g3);
}

function reflectVertical(glyph: number[]): number[] {
  const map = [0, 2, 1, 4, 3, 5, 7, 6, 9, 8, 10];
  return glyph.map(v => map[v]);
}

function reflectHorizontal(glyph: number[]): number[] {
  const map = [10, 8, 9, 6, 7, 5, 3, 4, 1, 2, 0];
  return glyph.map(v => map[v]);
}

export function related(glyph: Glyph, glyphs: Glyph[]): Glyph[] {
  const vLines = expandLines(reflectVertical(glyph.symbol));
  const hLines = expandLines(reflectHorizontal(glyph.symbol));
  const vhLines = expandLines(reflectVertical(reflectHorizontal(glyph.symbol)));

  const results: Glyph[] = [];

  let match = glyphs.find(g => areEqual(g.lines, vLines));
  if (match) { results.push(match); }

  match = glyphs.find(g => areEqual(g.lines, hLines));
  if (match) { results.push(match); }

  match = glyphs.find(g => areEqual(g.lines, vhLines));
  if (match) { results.push(match); }

  return _.uniq(results.filter(g => g.meanings[0] !== glyph.meanings[0]));
}
