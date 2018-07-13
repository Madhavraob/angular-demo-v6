import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DelayComponent } from "./delay/delay.component";

const routes: Routes = [{path:'',component:DelayComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
