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

  getNom(){
    return this.infoConnex.nom
  }

  getMdp(){
    return this.infoConnex.mdp
  }

  async verifConnex(){
    if (this.infoConnex.mdp=="" || this.infoConnex.mdp==""){
      await this.navCtrl.pop()
      await this.navCtrl.navigateRoot('/home')
      return false;
    }
    else return true;
  }

  setInfoConnex(nom, mdp){
    this.infoConnex.nom = nom
    this.infoConnex.mdp = mdp
  }

  async getArticles(){
    let link = 'http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?login='+ this.infoConnex.nom +'&mdp=' + this.infoConnex.mdp
    let res = await this.getData(link)
    res.articles.forEach(art => {
      art.date = new Date(art.date).toLocaleString('en-GB', { timeZone: 'UTC' });
    });
    return res.articles
  }

  async getGaleries(){
    let link = 'http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?login='+ this.infoConnex.nom +'&mdp=' + this.infoConnex.mdp
    let res = await this.getData(link)
    res.galeries.forEach(glr => {
      glr.date = new Date(glr.date).toLocaleString('en-GB', { timeZone: 'UTC' });
    });
    return res.galeries
  }

  async getDates(){
    let link = 'http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?login='+ this.infoConnex.nom +'&mdp=' + this.infoConnex.mdp
    let res = await this.getData(link)
    res.dates.forEach(dat => {
      dat.date = new Date(dat.date).toLocaleString('en-GB', { timeZone: 'UTC' });
    });
    return res.dates
  }
}
