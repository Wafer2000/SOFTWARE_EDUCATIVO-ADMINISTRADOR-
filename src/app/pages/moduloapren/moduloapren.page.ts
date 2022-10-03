import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-moduloapren',
  templateUrl: './moduloapren.page.html',
  styleUrls: ['./moduloapren.page.scss'],
})
export class ModuloaprenPage implements OnInit {

  constructor(
    public menucontroller: MenuController
    ) { }

    ngOnInit() {}

  openmenu(){
    console.log('Abrir Menu');
    this.menucontroller.toggle('menu');
  }
}