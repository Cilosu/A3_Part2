import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'scanner',
        loadChildren: () => import('../scanner/scanner.module').then(m => m.ScannerPageModule)
      },
      {
        path: 'email',
        loadChildren: () => import('../email/email.module').then(m => m.EmailPageModule)
      },
      {
        path: 'record',
        loadChildren: () => import('../record/record.module').then(m => m.RecordPageModule)
      },
      {
        path: 'compass',
        loadChildren: () => import('../compass/compass.module').then(m => m.CompassPageModule)
      },
      {
        path: 'ocr',
        loadChildren: () => import('../ocr/ocr.module').then(m => m.OcrPageModule)
      },
      {
        path: 't2s',
        loadChildren: () => import('../t2s/t2s.module').then(m => m.T2sPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/scanner',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/scanner',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
