import { Usuario } from './../interface/usuarios';
import { FirebaseService } from './../services/firebase.service';
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

  constructor(private servicio: RegistroService, private router: Router, private fire: FirebaseService) { }

  ngOnInit() {
  }

  /*guardar(txtUsuario,txtPassword,txtPasajeros){
    console.log("guardar")
    this.servicio.agregarUsuario(txtUsuario.value, txtPassword.value, this.selectedValue, txtPasajeros.value)
    Swal.fire({
      icon: 'success',
      title: 'Su cuenta fue creada exitosamente!',
      heightAuto: false
    })
    this.router.navigate(['/home'])
  }*/

  guardar(txtUsuario,txtPassword,txtPasajeros){
    console.log("guardar")
    const usu : Usuario = {
      id : this.fire.getId(),
      usuario : txtUsuario.value,
      password : txtPassword.value,
      activo : this.selectedValue,
      pasajeros : txtPasajeros.value
  }
    this.fire.cargarLoading("Guardando Usuario....")
    this.fire.createDoc(usu,'usuarios',usu.id).then(
      (res) => {
        this.fire.cerrarLoading()
        this.fire.mensaje("Usuario Generado Exitosamente!")
      }
    )
  }

  async registrar(txtEmail,txtPassword){
    const user = this.fire.registro(txtEmail.value, txtPassword.value);
    if (user){
      console.log("registrar")

    }
  }

}
