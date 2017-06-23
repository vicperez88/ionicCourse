import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetallePage } from './detalle';

@NgModule({
  declarations: [
    DetallePage,
  ],
  imports: [
    IonicPageModule.forChild(DetallePage),
  ],
  exports: [
    DetallePage
  ]
})
export class DetallePageModule {}
