import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { NavController } from '@ionic/angular';
import { GoogleAuthProvider } from '@angular/fire/auth'
import { error } from 'console';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = "";
  senha = "";
  mostrarSenha = true;
  constructor(
    private angularFire: AngularFireAuth,
    private angularStorage: AngularFireStorage,
    private navCtrl: NavController,


  ) { }

  ngOnInit() {

  }

  login() {
    this.angularFire.signInWithEmailAndPassword(this.usuario, this.senha).then((validacao: any) => {
      this.navCtrl.navigateForward("home")
    }), (error: any) => {
      alert("Usuario ou Senha invalidos");
      console.log("login erro: " + error);

    }
  }

  loginGoogle() {

    return this.angularFire.signInWithPopup(new GoogleAuthProvider()).then((resposta: any) => {
      localStorage.setItem('token', JSON.stringify(resposta.usuario?.uid));
      this.navCtrl.navigateForward('/home')

    }), (error: any) => {
      console.log("Error" + error);
    }


  }

  senhaVisivel() {
    this.mostrarSenha = !this.mostrarSenha;
  }


}
