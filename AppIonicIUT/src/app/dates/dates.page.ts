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
    this.getInitValue()
  }

  async getInitValue(){
    await this.apiService.verifConnex()
    this.dates = await this.apiService.getDates()
  }

  ngOnInit() {
  }

}
