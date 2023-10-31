import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.page.html',
  styleUrls: ['./sobre-nos.page.scss'],
})
export class SobreNosPage implements OnInit {

  modalSobre: any = null;
  
  constructor(
    public modal: ModalController
  ) { }

  ngOnInit() {
   
  }

  modalDimiss(){
    this.modal.dismiss();
  }

}
