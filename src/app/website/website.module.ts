import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
