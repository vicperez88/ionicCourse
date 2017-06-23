import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaPage, MensajesPage, AudioPage } from '../index.pages';

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1: any;
  tab2: any;
  tab3: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.tab1 = ListaPage;
    this.tab2 = MensajesPage;
    this.tab3 = AudioPage;

  }

}
