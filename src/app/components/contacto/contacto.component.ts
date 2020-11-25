import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/Services/mail.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  f_contacto = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$')]),
    telefono: new FormControl(),
    mensaje: new FormControl('',[Validators.required, Validators.minLength(10)])
  });

  constructor(public _mail:MailService) { }

  ngOnInit() {
  }

  sendMail() {
    this._mail.sendMail(this.f_contacto.value).subscribe(resp => {
      this.f_contacto.reset();
      alert('El mensaje fue enviado con exito');
    }, error => alert(error));
  }

}
