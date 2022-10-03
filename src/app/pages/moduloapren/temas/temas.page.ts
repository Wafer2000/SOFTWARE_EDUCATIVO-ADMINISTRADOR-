import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import { Modulo1Component } from './modulo1/modulo1.component';
import { Modulo2Component } from './modulo2/modulo2.component';
import { Modulo3Component } from './modulo3/modulo3.component';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.page.html',
  styleUrls: ['./temas.page.scss'],
})
export class TemasPage implements OnInit {

  constructor(
    public menucontroller: MenuController,
    public modalController: ModalController,
    public firebaseauthService: FirebaseauthService,
    public router: Router
    ) { }

  ngOnInit() {
  }

  openmenu(){
    console.log('Abrir Menu');
    this.menucontroller.toggle('menu');
  }

  async presentModal1() {
    const modal = await this.modalController.create({
      component: Modulo1Component,
      mode: 'ios',
      canDismiss: true,
    });
    return await modal.present();
  }

  async presentModal2() {
    const modal = await this.modalController.create({
      component: Modulo2Component,
      mode: 'ios',
      canDismiss: true,
    });
    return await modal.present();
  }

  async presentModal3() {
    const modal = await this.modalController.create({
      component: Modulo3Component,
      mode: 'ios',
      canDismiss: true,
    });
    return await modal.present();
  }

}


