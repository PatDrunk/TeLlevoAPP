import { RegistroService } from './../registro/registro.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarios = []

  constructor(private servicio: RegistroService ) {}

  ngOnInit() {
    this.usuarios = this.servicio.obtenerUsuarios()
  }

  ionViewWillEnter() {
    this.usuarios = this.servicio.obtenerUsuarios()
  }

}
