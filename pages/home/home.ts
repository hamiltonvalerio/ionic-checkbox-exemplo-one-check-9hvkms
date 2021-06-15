import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  utilizado: boolean;

  descartado: boolean;

  chkReference: string = '';

  isDisableddescartado: boolean;
  isDisabledutilizado: boolean;
  constructor(public navCtrl: NavController) {}

  imprime() {
    console.log(this.utilizado);
    console.log(this.descartado);
  }

  valida() {
    if (this.descartado == true) {
      this.utilizado = false;
      this.isDisabledutilizado = true;
    } else if (this.utilizado == true) {
      this.descartado = false;
      this.isDisableddescartado = true;
    } else {
      this.isDisabledutilizado = false;
      this.isDisableddescartado = false;
    }
  }
}
