import { Router } from '@angular/router';
import { Usuario } from './../interface/usuarios';
import { RegistroService } from './../registro/registro.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:Usuario
  constructor(private servicio: RegistroService, private router: Router) { }

  ngOnInit() {
  }
  
  login(txtUser,txtPass){
    this.usuario = this.servicio.obtenerUsuario(txtUser.value,txtPass.value)
    if (this.usuario.usuario === txtUser.value && this.usuario.usuario === txtPass.value) {
      this.router.navigate(['/opcion'])
    } else {
      Swal.fire({
        icon: 'error',
        text: 'Credenciales incorrectas!',
        heightAuto: false
      })
      
    }
    
  }
}
