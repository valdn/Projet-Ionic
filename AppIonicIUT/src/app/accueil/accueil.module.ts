import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilPageRoutingModule } from './accueil-routing.module';

import { AccueilPage } from './accueil.page';
import { ArticlesPageModule } from '../articles/articles.module';
import { InformationsPageModule } from '../informations/informations.module';
import { DatesPageModule } from '../dates/dates.module';
import { GaleriesPageModule } from '../galeries/galeries.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilPageRoutingModule,
    ArticlesPageModule,
    InformationsPageModule,
    DatesPageModule,
    GaleriesPageModule
  ],
  declarations: [AccueilPage]
})
export class AccueilPageModule {}
