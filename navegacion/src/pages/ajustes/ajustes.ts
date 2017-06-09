import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from '../index.paginas';

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private modalCtrl:ModalController) {
  }

  activarPrincipal(){
    this.navCtrl.parent.select(2);
  }

  mostrarModal() {
    let modal = this.modalCtrl.create( ModalPage, { nombre:"Victor", edad:28 } );
    modal.present();

    modal.onDidDismiss(parametros => {
      if (parametros) {
        console.log("Data del modal");
        console.log(parametros);
      } else {
        console.log("se cerró sin parametros")
      }
    });
  }
}
