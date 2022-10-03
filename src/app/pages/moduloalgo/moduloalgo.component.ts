import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { PreguntaEstu } from 'src/app/models/models';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-moduloalgo',
  templateUrl: './moduloalgo.component.html',
  styleUrls: ['./moduloalgo.component.scss'],
})
export class ModuloalgoComponent implements OnInit {

  tareas: PreguntaEstu[] = [];

  nuevo: PreguntaEstu;

  enableNuevo = false;

  private path = 'PregAlgoritmo';

  constructor(
              public menucontroller: MenuController,
              public firestoreService: FirestoreService,
              private interaction: InteractionService,
              public alertController: AlertController,
              public firebaseauthService: FirebaseauthService,
  ) {}

  ngOnInit() {
    this.getPreguntaEstuRecientes();
  }

  openmenu(){
    console.log('Abrir Menu');
    this.menucontroller.toggle('menu');
  }

  createRespuesta(){
    this.nuevo.fresp = new Date().toLocaleDateString('es-GB');
    this.nuevo.hresp = new Date().toLocaleTimeString('es-GB');
    if(this.nuevo.respuesta === ''){
      this.interaction.presentToast('Digite la respuesta');
    }else{
      this.interaction.presentLoading('Guardando...');
      this.firestoreService.createDoc(this.nuevo, this.path, this.nuevo.id).then(() =>{
        console.log('Guardado con exito ->');
        this.interaction.closeLoading();
        this.interaction.presentToast('Guardado con exito');
      }).catch( error => {
        this.interaction.closeLoading();
        this.interaction.presentToast('A ocurrido un Error');
        console.log('ERROR', error);
      });
      this.nueva();
    };
  }

  async getPreguntaEstuRecientes(){
    const uid = await this.firebaseauthService.getUid();
    this.firestoreService.getCollectionUnicDesc<PreguntaEstu>(this.path, 'estudiante', uid).subscribe(res => {
      this.tareas = res;
      console.log(res);
    });
  }

  nueva(){
    this.enableNuevo = false;
    this.nuevo = {
      pregunta: '',
      estudiante: '',
      respuesta: '',
      calif: null,
      tiempo: new Date(),
      id: this.firestoreService.getId(),
      fecha: new Date().toLocaleDateString('es-GB'),
      hora: new Date().toLocaleTimeString('es-GB'),
      hresp: new Date().toLocaleTimeString('es-GB'),
      fresp: new Date().toLocaleTimeString('es-GB'),
      estado: false
    };
  }

}
