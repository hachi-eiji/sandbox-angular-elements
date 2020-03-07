import { NgModule, Type } from '@angular/core';
import { AppModule } from './app.module';

import { ButtonComponent } from './button/button.component';

export const elementComponents: Record<string, Type<any>> = {
  'app-button-element': ButtonComponent
};

@NgModule({
  entryComponents: [
    ButtonComponent
  ],
  imports: [AppModule],
  providers: [],
})
export class AngularElementsModule {
  ngDoBootstrap() {}
}
