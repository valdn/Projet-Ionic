import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor(public navCtrl: NavController, public apiService: ApiService) {
    this.getInitValue()
  }

  async getInitValue(){
    await this.apiService.verifConnex()
  }

  ngOnInit() {
  }
}
