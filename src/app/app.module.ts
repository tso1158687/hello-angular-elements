import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { PanelComponent } from './panel/panel.component';
import { HeaderComponent } from './header/header.component';
// angular material module
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
// import angular elements
import { createCustomElement } from '@angular/elements';
@NgModule({
  declarations: [CardComponent, PanelComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(injector: Injector) {
    const customCard: any = createCustomElement(CardComponent, { injector });
    const customPanel: any = createCustomElement(PanelComponent, { injector });
    const customHeader: any = createCustomElement(HeaderComponent, { injector });
    customElements.define('custom-card', customCard);
    customElements.define('custom-panel', customPanel);
    customElements.define('custom-header', customHeader);
  }
  ngDoBootstrap() {}
}
