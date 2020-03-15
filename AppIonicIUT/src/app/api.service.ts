import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(public http: HttpClient) { }

  getInfoConnex(nom, mdp){
    return this.http.get('http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?connexion&login='+ nom +'&mdp=' + mdp)
  }
}
