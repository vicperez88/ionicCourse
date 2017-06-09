import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  nombre: string;
  edad: string;

  constructor(public viewCtrl: ViewController,
              public navParams: NavParams) {
     this.nombre= navParams.get("nombre");
     this.edad = this.navParams.get("edad");
     console.log( this.nombre, this.edad );
  }

  private cerrar_con_parametros(){
    let data = {
      nombre: "Juan Carlos",
      edad: 18,
      coords: {
        lat:10,
        lng:-10
      }
    };

    this.viewCtrl.dismiss(data);
  }

  private cerrar_sin_parametros(){
    this.viewCtrl.dismiss();
  }

}
