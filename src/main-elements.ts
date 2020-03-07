import './custom-elements-polyfills';
import 'zone.js/dist/zone.js';

import { enableProdMode, Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AngularElementsModule, elementComponents } from './app/angular-elements.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export function defineCustomElements(injector: Injector) {
  Object.keys(elementComponents).forEach((tagName) => {
    const customElement = createCustomElement(elementComponents[tagName], { injector });
    customElements.define(tagName, customElement);
  });
}

function initialize() {
  return platformBrowserDynamic().bootstrapModule(AngularElementsModule)
  .then((moduleRef) => {
    console.log('call platformBrowserDynamic');
    defineCustomElements(moduleRef.injector);
  })
  .catch(err => console.error(err));
}

window['initializeAngularElements'] = initialize;
