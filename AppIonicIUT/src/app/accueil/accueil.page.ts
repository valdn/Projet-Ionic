import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  public infoConnex = {
    nom: "",
    mdp: ""
  };

  constructor(public navCtrl: NavController, public apiService: ApiService) {
    this.getInitValue()
  }

  async getInitValue(){
    this.infoConnex.nom = await this.apiService.getNom()
    this.infoConnex.mdp = await this.apiService.getMdp()
  }

  allerArchives(){
    this.navCtrl.navigateForward('/archives')
  }

  allerGaleries(){
    this.navCtrl.navigateForward('/galeries')
  }

  allerDates(){
    this.navCtrl.navigateForward('/dates')
  } 

  allerInfos(){
    this.navCtrl.navigateForward('/informations')
  }

  ngOnInit() {
  }
}
