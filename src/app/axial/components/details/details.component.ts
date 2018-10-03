import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Glyph } from '@ax/axial/models';
import { selectors } from '@ax/axial/store';
import { AppState } from '@ax/core/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ax-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  name: Observable<string>;
  glyph: Glyph;
  related: Observable<Glyph[]>;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit() {
    this.name = this.route.paramMap.pipe(map(d => d.get('glyph')));
    this.name.subscribe(name => {
      this.store.select(selectors.glyphByName(name)).subscribe(g => this.glyph = g);
      this.related = this.store.select(selectors.relatedGlyphs(this.glyph));
    });
  }
}
