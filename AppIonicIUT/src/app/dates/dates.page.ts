import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.page.html',
  styleUrls: ['./dates.page.scss'],
})
export class DatesPage implements OnInit {

  public dates: any;

  constructor(public apiService: ApiService) { 
  }

  async ionViewWillEnter(){
    if (await this.apiService.verifConnex()){
      await this.getInitValue()
    }
  }

  async getInitValue(){
    this.dates = await this.apiService.getDates()
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
