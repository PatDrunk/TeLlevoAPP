import { ViajeService } from './../viaje.service';
import { RegistroService } from './../registro/registro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {

  usuarios = []
  viajes = []

  constructor(private servicio: RegistroService, private servicio2: ViajeService) { }

  ngOnInit() {
    this.viajes = this.servicio2.obtenerViajes()
    this.usuarios = this.servicio.obtenerUsuarios()
  }

  ionViewWillEnter() {
    this.viajes = this.servicio2.obtenerViajes()
    this.usuarios = this.servicio.obtenerUsuarios()
  }

}
