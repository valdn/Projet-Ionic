import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilPage } from './accueil.page';
import { ArticlesPage } from '../articles/articles.page';
import { InformationsPage } from '../informations/informations.page';
import { GaleriesPage } from '../galeries/galeries.page';
import { DatesPage } from '../dates/dates.page';

const routes: Routes = [
  {
    path: '',
    component: AccueilPage,
    children: [
      {
        path: 'articles',
        children: [
          {
            path: '',
            component: ArticlesPage,
            loadChildren: () => import('../articles/articles.module').then(m => m.ArticlesPageModule)
          }
        ]
      },
      {
        path: 'informations',
        children: [
          {
            path: '',
            component: InformationsPage,
            loadChildren: () => import('../informations/informations.module').then(m => m.InformationsPageModule)
          }
        ]
      },
      {
        path: 'galeries',
        children: [
          {
            path: '',
            component: GaleriesPage,
            loadChildren: () => import('../galeries/galeries.module').then(m => m.GaleriesPageModule)
          }
        ]
      },
      {
        path: 'dates',
        children: [
          {
            path: '',
            component: DatesPage,
            loadChildren: () => import('../dates/dates.module').then(m => m.DatesPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'accueil',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueilPageRoutingModule {}
