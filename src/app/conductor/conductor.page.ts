import { RegistroService } from './../registro/registro.service';
import { ViajeService } from './../viaje.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

  viaje: []
  hora: any;

  constructor(private activatedRoute: ActivatedRoute , private servicio: ViajeService, private servicio2: RegistroService ,private router: Router) { }

  ngOnInit() {

  }

  viajeIniciado(txtActual,txtDestino){
    this.servicio.agregarViaje('pedro',txtActual.value,txtDestino.value,this.hora)
    Swal.fire({
      icon: 'success',
      title: 'Hemos comenzado nuestro Viaje!',
      heightAuto: false
    })
  }


  viajeCancelado(){
    Swal.fire({
      icon: 'error',
      text: 'El Viaje a sido Cancelado!',
      heightAuto: false
    })
  }

}
