import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule
  ]
})
export class PanelModule { }
