import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-galeries',
  templateUrl: './galeries.page.html',
  styleUrls: ['./galeries.page.scss'],
})
export class GaleriesPage implements OnInit {

  public galeries: any;

  constructor(public apiService: ApiService) { 
  }

  async ionViewWillEnter(){ //A chaque chargement de page
    if (await this.apiService.verifConnex()){
      await this.getInitValue()
    }
  }

  async getInitValue(){ //Valeur de base
    this.galeries = await this.apiService.getChipDesign(await this.apiService.getGaleries())
  }

  doRefresh(event) { //Refresh
    this.getInitValue()

    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  ngOnInit() {
  }

}
