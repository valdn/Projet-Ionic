import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'galeries',
    loadChildren: () => import('./galeries/galeries.module').then( m => m.GaleriesPageModule)
  },
  {
    path: 'dates',
    loadChildren: () => import('./dates/dates.module').then( m => m.DatesPageModule)
  },
  {
    path: 'informations',
    loadChildren: () => import('./informations/informations.module').then( m => m.InformationsPageModule)
  },
  {
    path: 'articles',
    loadChildren: () => import('./articles/articles.module').then( m => m.ArticlesPageModule)
  },
  {
    path: 'favoris',
    loadChildren: () => import('./favoris/favoris.module').then( m => m.FavorisPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
