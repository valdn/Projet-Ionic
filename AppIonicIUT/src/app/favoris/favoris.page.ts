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
    this.getInitValue()
  }

  async getInitValue(){
    if(await this.apiService.verifConnex()){
      const articles = await this.apiService.getArticles()
      const nom = await this.apiService.getNom()
      this.stored = await this.storage.get('fav_' + nom)
      if(this.stored!=null && this.stored.length > 0){
        articles.forEach(element => {
          if (articles.indexOf(element.id)!=-1){
            this.articles.push(element)
          }
        });
      }
    }
  }

  ngOnInit() {
  }

}
