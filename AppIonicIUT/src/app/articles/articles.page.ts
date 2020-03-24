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
  public articlestot: any;

  constructor( public apiService: ApiService, private storage: Storage) { 
  }

  async ionViewWillEnter(){
    if (await this.apiService.verifConnex()){
      await this.getInitValue()
    }
  }

  async getInitValue(){
    this.articlestot = await this.apiService.getArticles()
    this.articles = this.articlestot
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

  async filterArchives(recherche){
    console.log(recherche)
    if (recherche==""){
       this.getInitValue()
    } else {
      this.articles = this.articlestot
      if(this.stored!=null){
        this.articles.forEach(element => {
          if (element.titre.search(recherche)==-1 && element.texte.search(recherche)==-1){
            this.articles = this.articles.filter(e => e !== element)
          }
        });
      }
    }
  }

  doRefresh(event) {
    this.getInitValue()

    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  ngOnInit() {
  }
}
