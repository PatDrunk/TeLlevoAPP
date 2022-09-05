import { RegistroService } from './registro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuarios = []
  selectedValue: any;

  constructor(private servicio: RegistroService, private router: Router) { }

  ngOnInit() {
  }

  guardar(txtUsuario,txtPassword,txtPasajeros){
    console.log("guardar")
    this.servicio.agregarUsuario(txtUsuario.value, txtPassword.value, this.selectedValue, txtPasajeros.value)
    Swal.fire({
      icon: 'success',
      title: 'Su cuenta fue creada exitosamente!',
      heightAuto: false
    })
    this.router.navigate(['/home'])
  }

}
