import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable()
export class ApiService {
  public infoConnex = {
    nom: "",
    mdp: "",
  };

  constructor(public navCtrl: NavController) { }

  async getInfoConnex(nom, mdp){
    let link = 'http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?connexion&login='+ nom +'&mdp=' + mdp
    let res = await this.getData(link)
    return res
  }

  async getData(link) { //Permet d'effectuer la requète vers les API
    let response = await fetch(link);
    let data = await response.json();
    return data;
  }

  async getNom(){
    if (this.infoConnex.nom==""){
      this.navCtrl.navigateForward('/home')
    }
    else{
      return this.infoConnex.nom
    }
  }

  async getMdp(){
    if (this.infoConnex.mdp==""){
      this.navCtrl.navigateForward('/home')
    }
    else{
      return this.infoConnex.mdp
    }
  }

  async verifConnex(){
    if (this.infoConnex.mdp=="" || this.infoConnex.mdp==""){
      this.navCtrl.navigateForward('/home')
    }
  }

  async setInfoConnex(nom, mdp){
    this.infoConnex.nom = nom
    this.infoConnex.mdp = mdp
  }

  async getArchives(){
    let link = 'http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?login='+ this.infoConnex.nom +'&mdp=' + this.infoConnex.mdp
    let res = await this.getData(link)
    console.log(res.articles)
    //return res
  }

  async getGaleries(){
    
  }

  async getDates(){
    
  }

}
