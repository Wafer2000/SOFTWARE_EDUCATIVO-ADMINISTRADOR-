import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController, ModalController } from '@ionic/angular';
import { Temas } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-modulo2',
  templateUrl: './modulo2.component.html',
  styleUrls: ['./modulo2.component.scss'],
})
export class Modulo2Component implements OnInit {

  temas: Temas[] = [];

  nuevo: Temas;

  enableNuevo = false;

  private path = 'Temas';

  constructor(
              public menucontroller: MenuController,
              public firestoreService: FirestoreService, 
              private interaction: InteractionService,
              public alertController: AlertController,
              public modalController: ModalController
              
  ) {}

  ngOnInit() {
    this.getTemasRecientes();
  }

  openmenu(){
    console.log('Abrir Menu');
    this.menucontroller.toggle('menu');
  }

  cerrar(){
    this.modalController.dismiss();
  }

  getTemasRecientes(){
    this.nueva();
    this.firestoreService.getCollectionUnicAsc<Temas>(this.path, 'modulo', 2).subscribe(res => {
      this.temas = res;
      console.log(res)
    });
  }

  nueva(){
    this.enableNuevo = false;
    this.nuevo = {
      titulo: '',
      contenido: '',
      tiempo: new Date(),
      id: this.firestoreService.getId(),
      modulo: 1
    };
  }

}
