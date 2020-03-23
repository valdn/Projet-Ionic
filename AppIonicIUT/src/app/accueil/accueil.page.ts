import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor(public navCtrl: NavController, public apiService: ApiService) {
    this.getInitValue()
  }

  async getInitValue(){
    await this.apiService.verifConnex()
  }

  allerArticles(){
    this.navCtrl.navigateForward('/accueil/articles')
  }

  allerGaleries(){
    this.navCtrl.navigateForward('/accueil/galeries')
  }

  allerDates(){
    this.navCtrl.navigateForward('/accueil/dates')
  } 

  allerInfos(){
    this.navCtrl.navigateForward('/accueil/informations')
  }

  ngOnInit() {
  }
}
