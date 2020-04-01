import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { PanelComponent } from './panel/panel.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
// import angular elements
import { createCustomElement } from '@angular/elements';
@NgModule({
  declarations: [CardComponent, PanelComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(injector: Injector) {
    const customCard: any = createCustomElement(CardComponent, { injector });
    const customPanel: any = createCustomElement(PanelComponent, { injector });
    customElements.define('custom-card', customCard);
    customElements.define('custom-panel', customPanel);
  }
  ngDoBootstrap() {}
}
