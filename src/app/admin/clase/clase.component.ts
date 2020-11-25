import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.css']
})
export class ClaseComponent implements OnInit {
  isEditing = false;
  clases = [];
  f_clase = new FormGroup({ 
    id: new FormControl(''),
    clase: new FormControl('')
  });


  constructor(public _sa:AdminService) { }

  ngOnInit() {
    this.getClases();
  }

  getClases() {
    this._sa.getClases().subscribe((clases:any) => {
      this.clases=clases;
    });
  }


  saveClase() {
    Swal.showLoading();
    this._sa.saveClase(this.f_clase.value).subscribe(success => {
      Swal.close();
      this.f_clase.reset();
      this.isEditing = false;
      this.getClases();
    });
  }


  delClase(clase) {
    if(confirm('Esta seguto de borrarlo?'))
      this._sa.delClase(clase.id).subscribe(success => {
        this.getClases();
      });
  }

  editClase(clase) {
    this.isEditing = true;
    this.f_clase.setValue({id:clase.id, clase:clase.clase});
  }

  cancel() {
    this.f_clase.reset();
    this.isEditing = false;
  }
}

