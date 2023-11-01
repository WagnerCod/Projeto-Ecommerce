import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { SobreNosPage } from '../sobre-nos/sobre-nos.page';
import * as $ from 'jquery'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  modalSobre: any = null;

  constructor(
    public navCrl: NavController,
    public modal: ModalController,

  ) {

  }
  
  ngOnInit() {
 
  }

  login(){
    this.navCrl.navigateForward('/login');
  }

  async sobreNos() {
    const modalSobre = await this.modal.create({
      component: SobreNosPage,
    })
    await modalSobre.present();
  }



  completoPag() {
    this.navCrl.navigateForward("/complemento")
  }
  

}
