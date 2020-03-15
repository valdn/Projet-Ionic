import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

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

  constructor(public navCtrl: NavController, private storage: Storage) {
    this.getInitValue()
  }

  getInitValue(){
    this.storage.get('tempConnex').then((val) => {
      this.infoConnex.nom = val.nom
      this.infoConnex.mdp = val.mdp
    });
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
