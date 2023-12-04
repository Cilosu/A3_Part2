import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { T2sPage } from './t2s.page';

const routes: Routes = [
  {
    path: '',
    component: T2sPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class T2sPageRoutingModule {}
