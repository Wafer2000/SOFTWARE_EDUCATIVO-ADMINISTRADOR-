import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, AlertController } from '@ionic/angular';
import { Codigos } from 'src/app/models/models';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-bibliotecacodi',
  templateUrl: './bibliotecacodi.component.html',
  styleUrls: ['./bibliotecacodi.component.scss'],
})
export class BibliotecacodiComponent implements OnInit {

  codigos: Codigos[] = [];

  nuevo: Codigos= {
    id: this.firestoreService.getId(),
    titulo: '',
    contenido: '',
    tiempo: new Date(),
    fecha: '',
    hora: '',
    caracte: ''
  };

  enableNuevo = false;

  private path = 'Codigos';

  constructor(
              public menucontroller: MenuController,
              public firestoreService: FirestoreService,
              public alertController: AlertController,
              public firebaseauthService: FirebaseauthService,
              public router: Router
  ) {
  }

  ngOnInit() {
    this.getCodigosRecientes();
  }

  getCodigosRecientes(){
    this.firestoreService.getCollectionTodos<Codigos>(this.path).subscribe(res => {
      this.codigos = res;
      console.log(res);
    });
  }

  openmenu(){
    console.log('Abrir Menu');
    this.menucontroller.toggle('menu');
  }

}
