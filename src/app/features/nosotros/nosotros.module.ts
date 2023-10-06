import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { NosotrosPageComponent } from './pages/nosotros-page/nosotros-page.component';


@NgModule({
  declarations: [
    NosotrosPageComponent
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule
  ],
  exports:[NosotrosPageComponent],

})
export class NosotrosModule { }
