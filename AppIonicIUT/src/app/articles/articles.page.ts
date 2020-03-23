import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {

  constructor(public apiService: ApiService) { 
    this.getInitValue()
  }

  async getInitValue(){
    await this.apiService.getArchives()
  }
  
  ngOnInit() {
  }
}
