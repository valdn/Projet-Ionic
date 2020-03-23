import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {

  public articles: any;
  public nom: any;
  public stored: any;

  constructor(public apiService: ApiService, private storage: Storage) { 
    this.getInitValue()
  }

  async getInitValue(){
    if(await this.apiService.verifConnex()){
      this.articles = await this.apiService.getArticles()
      this.nom = await this.apiService.getNom()
      this.stored = await this.storage.get('fav_' + this.nom)

      if(this.stored==null){
        this.storage.set('fav_' + this.nom, [])
        this.articles.forEach(element => {
          element.checked = false;
        });
      }
      else{
        this.articles.forEach(element => {
          if (this.stored.indexOf(element.id) !== -1){
            element.checked = true;
          }
          else {
            element.checked = false;
          }
        });
      }
    }
  }

  onChange(id, isChecked){
    if(this.stored!=null){
      if (isChecked){
        this.stored.push(id)
        this.storage.set('fav_' + this.nom, this.stored)
      }
      else{
        this.stored = this.stored.filter(e => e !== id)
        this.storage.set('fav_' + this.nom, this.stored)
      }
    }
  }

  ngOnInit() {
  }
}
