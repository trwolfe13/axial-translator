import { NgModule } from '@angular/core';
import { CoreModule } from '@ax/core';
import { SharedModule } from '@ax/shared';
import { AxialModule } from '@ax/axial';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    AxialModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
