import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'website',loadChildren:()=>import('./website/website.module').then((m)=>m.WebsiteModule)},

  { path: 'jesusflores1', loadChildren: () => import('./jesusflores1/jesusflores1.module').then(m => m.Jesusflores1Module) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
