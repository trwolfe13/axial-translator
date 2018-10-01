import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Glyph } from '@ax/axial/models';
import { Store } from '@ngrx/store';
import { AppState } from '@ax/core/store';
import { selectors } from '@ax/axial/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ax-related',
  templateUrl: './related.component.html'
})
export class RelatedComponent implements OnInit {
  name: Observable<string>;
  related: Observable<Glyph[]>;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit() {
    this.name = this.route.paramMap.pipe(map(d => d.get('glyph')));
    this.name.subscribe(name => {
      this.related = this.store.select(selectors.relatedGlyphs(name));
    });
  }
}
