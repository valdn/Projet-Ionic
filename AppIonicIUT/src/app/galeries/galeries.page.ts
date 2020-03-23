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
    this.getInitValue()
  }

  async getInitValue(){
    if(await this.apiService.verifConnex()){
      this.galeries = await this.apiService.getGaleries()
    }
  }

  ngOnInit() {
  }

}
