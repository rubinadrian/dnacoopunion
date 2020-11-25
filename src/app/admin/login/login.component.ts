import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  f_login = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(public _auth: AuthService,
              private _router:Router) { }

  ngOnInit() {
  }

  login() {
    Swal.showLoading();
    this._auth.login(this.f_login.value).subscribe(resp => {
      Swal.close();
      this._router.navigate(['admin','producto']);
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'User/Password',
        text: 'Usuario o contraseña invalida'
      });
    });
  }

}
