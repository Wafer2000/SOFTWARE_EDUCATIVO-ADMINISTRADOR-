import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController } from '@ionic/angular';
import { Usuarios, Preguntas } from 'src/app/models/models';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-evaluaciones',
  templateUrl: './evaluaciones.page.html',
  styleUrls: ['./evaluaciones.page.scss'],
})
export class EvaluacionesPage implements OnInit {

  usuario: Usuarios[] = [];

  preguntas1Modulo1: Preguntas [] = [];
  resp1Modulo1: string = '';

  preguntas2Modulo1: Preguntas [] = [];
  resp2Modulo1: string = '';

  preguntas3Modulo1: Preguntas [] = [];
  resp3Modulo1: string = '';

  preguntas4Modulo1: Preguntas [] = [];
  resp4Modulo1: string = '';

  preguntas5Modulo1: Preguntas [] = [];
  resp5Modulo1: string = '';

  preguntas6Modulo1: Preguntas [] = [];
  resp6Modulo1: string = '';

  preguntas7Modulo1: Preguntas [] = [];
  resp7Modulo1: string = '';

  preguntas8Modulo1: Preguntas [] = [];
  resp8Modulo1: string = '';

  preguntas9Modulo1: Preguntas [] = [];
  resp9Modulo1: string = '';

  preguntas10Modulo1: Preguntas [] = [];
  resp10Modulo1: string = '';

  preguntas1Modulo2: Preguntas [] = [];
  resp1Modulo2: string = '';

  preguntas2Modulo2: Preguntas [] = [];
  resp2Modulo2: string = '';

  preguntas3Modulo2: Preguntas [] = [];
  resp3Modulo2: string = '';

  preguntas4Modulo2: Preguntas [] = [];
  resp4Modulo2: string = '';

  preguntas5Modulo2: Preguntas [] = [];
  resp5Modulo2: string = '';

  preguntas6Modulo2: Preguntas [] = [];
  resp6Modulo2: string = '';

  preguntas7Modulo2: Preguntas [] = [];
  resp7Modulo2: string = '';

  preguntas8Modulo2: Preguntas [] = [];
  resp8Modulo2: string = '';

  preguntas9Modulo2: Preguntas [] = [];
  resp9Modulo2: string = '';

  preguntas10Modulo2: Preguntas [] = [];
  resp10Modulo2: string = '';

  preguntas1Modulo3: Preguntas [] = [];
  resp1Modulo3: string = '';

  preguntas2Modulo3: Preguntas [] = [];
  resp2Modulo3: string = '';

  preguntas3Modulo3: Preguntas [] = [];
  resp3Modulo3: string = '';

  preguntas4Modulo3: Preguntas [] = [];
  resp4Modulo3: string = '';

  preguntas5Modulo3: Preguntas [] = [];
  resp5Modulo3: string = '';

  preguntas6Modulo3: Preguntas [] = [];
  resp6Modulo3: string = '';

  preguntas7Modulo3: Preguntas [] = [];
  resp7Modulo3: string = '';

  preguntas8Modulo3: Preguntas [] = [];
  resp8Modulo3: string = '';

  preguntas9Modulo3: Preguntas [] = [];
  resp9Modulo3: string = '';

  preguntas10Modulo3: Preguntas [] = [];
  resp10Modulo3: string = '';

  enableNuevo = false;

  completado: boolean = false;

  constructor(
    public modalController: ModalController,
    public firestoreService: FirestoreService, 
    public firebaseauthService: FirebaseauthService,
    private interaction: InteractionService,
    public menucontroller: MenuController,
    ) { }

  ngOnInit() {
    this.Completado();
    this.PreguntasModulo1();
    this.PreguntasModulo2();
    this.PreguntasModulo3();
  }

  openmenu(){
    console.log('Abrir Menu');
    this.menucontroller.toggle('menu');
  }

  async Completado(){
    const uid = await this.firebaseauthService.getUid();
    this.firestoreService.getCollectionUnic<Usuarios>('Usuarios', 'uid', uid).subscribe(res=>{
      this.usuario = res;
    });
  }

  PreguntasModulo1(){
    const path = 'Pregunta';
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 1, 'num', 1).subscribe(res => {
      this.preguntas1Modulo1 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 1, 'num', 2).subscribe(res => {
      this.preguntas2Modulo1 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 1, 'num', 3).subscribe(res => {
      this.preguntas3Modulo1 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 1, 'num', 4).subscribe(res => {
      this.preguntas4Modulo1 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 1, 'num', 5).subscribe(res => {
      this.preguntas5Modulo1 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 1, 'num', 6).subscribe(res => {
      this.preguntas6Modulo1 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 1, 'num', 7).subscribe(res => {
      this.preguntas7Modulo1 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 1, 'num', 8).subscribe(res => {
      this.preguntas8Modulo1 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 1, 'num', 9).subscribe(res => {
      this.preguntas9Modulo1 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 1, 'num', 10).subscribe(res => {
      this.preguntas10Modulo1 = res;
      console.log(res)
    });
  }

  PreguntasModulo2(){
    const path = 'Pregunta';
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 2, 'num', 1).subscribe(res => {
      this.preguntas1Modulo2 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 2, 'num', 2).subscribe(res => {
      this.preguntas2Modulo2 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 2, 'num', 3).subscribe(res => {
      this.preguntas3Modulo2 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 2, 'num', 4).subscribe(res => {
      this.preguntas4Modulo2 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 2, 'num', 5).subscribe(res => {
      this.preguntas5Modulo2 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 2, 'num', 6).subscribe(res => {
      this.preguntas6Modulo2 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 2, 'num', 7).subscribe(res => {
      this.preguntas7Modulo2 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 2, 'num', 8).subscribe(res => {
      this.preguntas8Modulo2 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 2, 'num', 9).subscribe(res => {
      this.preguntas9Modulo2 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 2, 'num', 10).subscribe(res => {
      this.preguntas10Modulo2 = res;
      console.log(res)
    });
  }

  PreguntasModulo3(){
    const path = 'Pregunta';
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 3, 'num', 1).subscribe(res => {
      this.preguntas1Modulo3 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 3, 'num', 2).subscribe(res => {
      this.preguntas2Modulo3 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 3, 'num', 3).subscribe(res => {
      this.preguntas3Modulo3 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 3, 'num', 4).subscribe(res => {
      this.preguntas4Modulo3 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 3, 'num', 5).subscribe(res => {
      this.preguntas5Modulo3 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 3, 'num', 6).subscribe(res => {
      this.preguntas6Modulo3 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 3, 'num', 7).subscribe(res => {
      this.preguntas7Modulo3 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 3, 'num', 8).subscribe(res => {
      this.preguntas8Modulo3 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 3, 'num', 9).subscribe(res => {
      this.preguntas9Modulo3 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnicDouble<Preguntas>(path, 'modulo', 3, 'num', 10).subscribe(res => {
      this.preguntas10Modulo3 = res;
      console.log(res)
    });
  }

  async GuardarRespuestasModulo1(usuariosins,
    resp1Modulo1, resp2Modulo1, resp3Modulo1, resp4Modulo1, resp5Modulo1, resp6Modulo1, resp7Modulo1, resp8Modulo1, resp9Modulo1, resp10Modulo1
    ){
    const uid = await this.firebaseauthService.getUid();
    const id = uid+'Modulo1'
    const path = 'Respuesta';
    const respuestas ={
      id,
      uid,
      nombres: usuariosins.nombres,
      apellidos: usuariosins.apellidos,
      resp1Modulo1,
      resp2Modulo1,
      resp3Modulo1,
      resp4Modulo1,
      resp5Modulo1,
      resp6Modulo1,
      resp7Modulo1,
      resp8Modulo1,
      resp9Modulo1,
      resp10Modulo1,
      modulo: 1,
      tiempo: new Date(),
      fecha: new Date().toLocaleDateString('es-GB'),
      hora: new Date().toLocaleTimeString('en-US'),
    }
    this.interaction.presentLoading('Guardando Respuestas...')
    this.firestoreService.createDoc(respuestas, path, id).then(res=>{
      console.log('Respuestas-> ',res);
      const path1 = 'Usuarios';
      const data1 = {
        completado1: true,
        completado2: false
      };
      this.firestoreService.updateDoc(path1, uid, data1).then(res =>{
        console.log('Se realizo -> ', res)
      })
      this.interaction.closeLoading();
      this.interaction.presentToast('Guardado con exito')
    }).catch(err=>{
      console.log('ERROR-> ',err)
      this.interaction.closeLoading();
      this.interaction.presentToast('A ocurrido un ERROR')
    })
  }

  async GuardarRespuestasModulo2(usuariosins,
    resp1Modulo2, resp2Modulo2, resp3Modulo2, resp4Modulo2, resp5Modulo2, resp6Modulo2, resp7Modulo2, resp8Modulo2, resp9Modulo2, resp10Modulo2
    ){
    const usuario = await this.firebaseauthService.getUid();
    const uid = usuario+'Modulo2'
    const path = 'Respuesta';
    const respuestas ={
      uid,
      usuario,
      nombres: usuariosins.nombres,
      apellidos: usuariosins.apellidos,
      resp1Modulo2,
      resp2Modulo2,
      resp3Modulo2,
      resp4Modulo2,
      resp5Modulo2,
      resp6Modulo2,
      resp7Modulo2,
      resp8Modulo2,
      resp9Modulo2,
      resp10Modulo2,
      modulo: 2,
      tiempo: new Date(),
      fecha: new Date().toLocaleDateString('es-GB'),
      hora: new Date().toLocaleTimeString('en-US'),
    }
    this.interaction.presentLoading('Guardando Respuestas...')
    this.firestoreService.createDoc(respuestas, path, uid).then(res=>{
      console.log('Respuestas-> ',res);
      const path1 = 'Usuarios';
      const data1 = {
        completado2: true,
        completado3: false
      };
      this.firestoreService.updateDoc(path1, usuario, data1).then(res =>{
        console.log('Se realizo -> ', res)
      })
      this.interaction.closeLoading();
      this.interaction.presentToast('Guardado con exito')
    }).catch(err=>{
      console.log('ERROR-> ',err)
      this.interaction.closeLoading();
      this.interaction.presentToast('A ocurrido un ERROR')
    })
  }

  async GuardarRespuestasModulo3(usuariosins,
    resp1Modulo3, resp2Modulo3, resp3Modulo3, resp4Modulo3, resp5Modulo3, resp6Modulo3, resp7Modulo3, resp8Modulo3, resp9Modulo3, resp10Modulo3
    ){
    const usuario = await this.firebaseauthService.getUid();
    const uid = usuario+'Modulo3'
    const path = 'Respuesta';
    const respuestas ={
      uid,
      usuario,
      nombres: usuariosins.nombres,
      apellidos: usuariosins.apellidos,
      resp1Modulo3,
      resp2Modulo3,
      resp3Modulo3,
      resp4Modulo3,
      resp5Modulo3,
      resp6Modulo3,
      resp7Modulo3,
      resp8Modulo3,
      resp9Modulo3,
      resp10Modulo3,
      modulo: 3,
      tiempo: new Date(),
      fecha: new Date().toLocaleDateString('es-GB'),
      hora: new Date().toLocaleTimeString('en-US'),
    }
    this.interaction.presentLoading('Guardando Respuestas...')
    this.firestoreService.createDoc(respuestas, path, uid).then(res=>{
      console.log('Respuestas-> ',res);
      const path1 = 'Usuarios';
      const data1 = {
        completado3: true
      };
      this.firestoreService.updateDoc(path1, usuario, data1).then(res =>{
        console.log('Se realizo -> ', res)
      })
      this.interaction.closeLoading();
      this.interaction.presentToast('Guardado con exito')
    }).catch(err=>{
      console.log('ERROR-> ',err)
      this.interaction.closeLoading();
      this.interaction.presentToast('A ocurrido un ERROR')
    })
  }

}


