import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  mutante:any={};

  constructor( private navParams:NavParams) {
    console.log( navParams );

    this.mutante = this.navParams.get("personaje");

  }

}
