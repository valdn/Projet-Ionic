import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public infoConnex = {
    nom: "",
    mdp: "",
    checked: false,
  };
  public resultats: any;
  

  constructor(public navCtrl: NavController,public apiService: ApiService, public toastController: ToastController, private storage: Storage) {
    this.getInitValue()
  }

  async getInitValue(){ //Valeur d'initialisation
    await this.storage.get('infoConnex').then((val) => {
      if (val != null){
        this.infoConnex.nom = val.nom
        this.infoConnex.mdp = val.mdp
        this.infoConnex.checked = val.checked
      }
    });
  }

  async verifValue(){ //permet de vérifier les valeurs du nom et mdp à chaque appuie sur le bouton valider
    this.resultats = await this.apiService.getInfoConnex(this.infoConnex.nom, this.infoConnex.mdp)
      if (this.resultats.resultat){
        this.resultMsg()
        await this.apiService.setInfoConnex(this.infoConnex.nom, this.infoConnex.mdp)
        if (this.infoConnex.checked){
          this.storage.set('infoConnex', this.infoConnex);
        } 
        else {
          this.infoConnex.nom = ""
          this.infoConnex.mdp = ""
          this.storage.set('infoConnex', this.infoConnex);
        }
        this.chooseNavigation()
      }
      else this.errorMsg()
  }

  async chooseNavigation(){ //Permet de rediriger l'utilisateur vers le tutoriel pour la première fois puis vers l'accueil
    await this.storage.get('getTuto').then((val) => {
      if (val != null){
        this.navCtrl.navigateForward('/accueil/articles')
      }
      else{
        this.navCtrl.navigateForward('/tutoriel')
        this.storage.set('getTuto', 1);
      }
    });
  }

  async resultMsg() { //Toast de bonne connexion
    const toast = await this.toastController.create({
      message: "Vous êtes connecté",
      duration: 2000,
      position: 'top',
      color: 'primary',
    });
    toast.present();
  }

  async errorMsg() { //Toat de mauvaise connexion
    const toast = await this.toastController.create({
      message: "Erreur, mauvais nom/mot de passe",
      duration: 2000,
      position: 'top',
      color: 'danger',
    });
    toast.present();
  }
}