import { Viaje } from './interface/viaje';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  public viaje : Viaje [] = [
    {
      ID: '1',
      nombre_usuario : 'Pedro',
      desde: 'Santiago',
      hasta: 'Buin',
      hora_viaje : '08:10'
    }
  ]

  constructor() { }

  obtenerViajes(){
    return [...this.viaje]
  }

  obtenerViaje(usuario: string){
    return{
      ...this.viaje.find(aux => {
        return aux.nombre_usuario === usuario
      })
    }
  }

  agregarViaje(ID: string, nombre_usuario: string,desde: string,hasta: string,hora_viaje: string){
    this.viaje.push({
      ID,nombre_usuario,desde,hasta,hora_viaje
    })

  }
}
