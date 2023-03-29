import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Jesusflores1Component } from './jesusflores1.component';

const routes: Routes = [{ path: '', component: Jesusflores1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Jesusflores1RoutingModule { }
