import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.page.html',
  styleUrls: ['./favoris.page.scss'],
})
export class FavorisPage implements OnInit {

  public stored: any;
  public articles: any;

  constructor(public apiService: ApiService, private storage: Storage) {
  }

  async ionViewWillEnter(){ //A chaque chargement de page
    if (await this.apiService.verifConnex()){
      await this.getInitValue()
    }
  }

  async getInitValue(){ //Récupère les archives likés
    let articles = await this.apiService.getChipDesign(await this.apiService.getArticles())
    const nom = await this.apiService.getNom()
    this.stored = await this.storage.get('fav_' + nom)
    if(this.stored!=null){
      articles.forEach(element => {
        if (this.stored.indexOf(element.id)==-1){
          articles = articles.filter(e => e !== element)
        }
      });
      this.articles = articles
    }
  }

  ngOnInit() {
  }
}
