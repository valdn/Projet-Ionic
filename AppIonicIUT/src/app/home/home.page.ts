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

  getInitValue(){
    this.storage.get('infoConnex').then((val) => {
      this.infoConnex.nom = val.nom
      this.infoConnex.mdp = val.mdp
      this.infoConnex.checked = val.checked
    });
  }

  async verifValue(): Promise<void>{
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
        this.navCtrl.navigateForward('/accueil/articles')
      }
      else this.errorMsg()
  }

  async resultMsg() {
    const toast = await this.toastController.create({
      message: "You are connected",
      duration: 2000,
      position: 'top',
      color: 'primary',
    });
    toast.present();
  }

  async errorMsg() {
    const toast = await this.toastController.create({
      message: "Error, wrong name/password",
      duration: 2000,
      position: 'top',
      color: 'danger',
    });
    toast.present();
  }
}