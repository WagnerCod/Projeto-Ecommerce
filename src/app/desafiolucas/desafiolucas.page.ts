import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-desafiolucas',
  templateUrl: './desafiolucas.page.html',
  styleUrls: ['./desafiolucas.page.scss'],
})
export class DesafiolucasPage implements OnInit {
  forCarros: any = [];
  ltg: any;
  parametro = '';

  constructor(private navCrl: NavController) {
    this.obrigatorio();
  }

  ngOnInit() {}

  obrigatorio() {
    interface Carro {
      MARCA: string;
      MODELO: string;
      ANO: string;
      PRECO: string;
    }

    this.parametro = 'MARCA; MODELO; ANO; PRECO;';
    this.ltg = localStorage.setItem('obg: ', this.parametro);

    let array: Carro[] = [
      {
        MARCA: 'FIAT',
        MODELO: '',
        ANO: '2024',
        PRECO: '123',
      },
    ];
    this.forCarros = [];

    for (let i = 0; i < array.length; i++) {
      this.forCarros[i] = array[i];
    }
  }

  salvar() {
    let getltg = localStorage.getItem('obg: ');
    let camposVazios = [];

    for (let carro of this.forCarros) {
      for (let propriedade in carro) {
        if (carro[propriedade] === '') {
          camposVazios.push(propriedade);
        }
      }
    }
    
    if (getltg && camposVazios.length > 0) {
      alert('Preencha os campos: ' + camposVazios.join(', '));
    } else {
      this.navCrl.navigateForward('/home');
    }
  }
}
