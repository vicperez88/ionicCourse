import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PERSONAJES } from '../../app/personajes.data';
import { DetallePage } from '../index.pages';

/**
 * Generated class for the ListaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

  private personajes: any = PERSONAJES;
  private detalle: any = DetallePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
  }

  private irPagina( personaje:any ) {
    this.navCtrl.push( this.detalle, { 'personaje': personaje} )
  }

}
