import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-complemento',
  templateUrl: './complemento.page.html',
  styleUrls: ['./complemento.page.scss'],
})
export class ComplementoPage implements OnInit {

  constructor(public navCrtl: NavController) { }

  ngOnInit() {
  }

  voltarPag(){
    this.navCrtl.back();
  }
}
