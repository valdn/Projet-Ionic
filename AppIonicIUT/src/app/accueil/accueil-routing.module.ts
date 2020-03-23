import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilPage } from './accueil.page';

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
            loadChildren: '../articles/articles.module#ArticlesPageModule'
          }
        ]
      },
      {
        path: 'informations',
        children: [
          {
            path: '',
            loadChildren: '../informations/informations.module#InformationsPageModule'
          }
        ]
      },
      {
        path: 'galeries',
        children: [
          {
            path: '',
            loadChildren: '../galeries/galeries.module#GaleriesPageModule'
          }
        ]
      },
      {
        path: 'dates',
        children: [
          {
            path: '',
            loadChildren: '../dates/dates.module#DatesPageModule'
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
