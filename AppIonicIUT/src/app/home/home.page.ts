import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public infoConnex = {
    nom: "",
    mdp: ""
  };
  public resultats: any;
  public checked: boolean;

  constructor(private http: HttpClient, public toastController: ToastController, private storage: Storage) {
    this.getInitValue()
  }

  getInitValue(){
    this.storage.get('checked').then((val) => {
      this.checked = val
    });
    this.storage.get('nom').then((val) => {
      this.infoConnex.nom = val
    });
    this.storage.get('mdp').then((val) => {
      this.infoConnex.mdp = val
    });
  }

  verifValue(){
    this.http.get('http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?connexion&login='+ this.infoConnex.nom +'&mdp=' + this.infoConnex.mdp)
    .subscribe((data) => {
    this.resultats = data;
    if (this.resultats.resultat){
      this.resultMsg()
      if (this.checked){
        this.storage.set('nom', this.infoConnex.nom);
        this.storage.set('mdp', this.infoConnex.mdp);
        this.storage.set('checked', this.checked);
      } 
      else {
        this.storage.set('nom', "");
        this.storage.set('mdp', "");
        this.storage.set('checked', false);
      }
    }
    else this.errorMsg()
    });
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