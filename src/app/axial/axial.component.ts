import { Component } from '@angular/core';
import { LoadGlyphs } from '@ax/axial/store';
import { AppState } from '@ax/core/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ax-axial',
  templateUrl: './axial.component.html',
  styleUrls: ['./axial.component.scss']
})
export class AxialComponent {
  constructor(private store: Store<AppState>) {
    this.store.dispatch(new LoadGlyphs());
  } 
}
