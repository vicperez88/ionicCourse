import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ANIMALES } from "../../data/data.animales";
import { Animal } from '../../interfaces/animal.interface';
import { Refresher, reorderArray } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  animales: Animal[] = [];
  audio = new Audio();
  audioTiempo: any;
  ordenando: boolean = false;

  constructor(public navCtrl: NavController) {

    this.animales = ANIMALES.slice(0);

  }

  reproducir( animal: Animal ) {
    console.log( animal );

    this.pausar_audio( animal );
    if ( animal.reproduciendo ) {
      animal.reproduciendo = false;
      return;
    }

    this.audio.src = animal.audio;
    animal.reproduciendo = true;

    this.audio.load();
    this.audio.play();

    this.audioTiempo = setTimeout( ()=> animal.reproduciendo = false, animal.duracion * 1000 );

  }

  private pausar_audio( animalSel: Animal ) {
    clearTimeout( this.audioTiempo );
    this.audio.pause();
    this.audio.currentTime = 0;

    for ( let animal of this.animales ) {
      if ( animal.nombre != animalSel.nombre ) {
        animal.reproduciendo = false;
      }
    }
  }

  borrar_animal ( idx:number ) {
    this.animales.splice(idx, 1);
  }

  public recargar_animales( refresher:Refresher ) {
    console.log("inicio del refresh");
    setTimeout( ()=>{
      console.log("Termino el refresh");
      this.animales = ANIMALES.slice(0);
      refresher.complete();
    }, 1500)
  }

  public reordenar_animales( indices: any) {
    console.log(indices)
    this.animales = reorderArray( this.animales, indices);
  }

}
