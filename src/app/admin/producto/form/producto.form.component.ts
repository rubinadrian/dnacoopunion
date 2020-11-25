import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../admin.service';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-producto.form',
  templateUrl: './producto.form.component.html',
  styleUrls: ['./producto.form.component.css']
})
export class ProductoFormComponent implements OnInit {
  f_producto = new FormGroup({
    id: new FormControl(),
    nombre: new FormControl('', [Validators.required]),
    categoria: new FormControl(),
    formadeuso: new FormControl(),
    envasado: new FormControl(),
    senasa: new FormControl(),
    imagen: new FormControl(),
    file_senasa: new FormControl(),
    file_espe: new FormControl(),
    clase_id: new FormControl('', [Validators.required])
  });

  clases = [];
  imageUrl: any = '';
  file_senasa: File = null;
  file_espe: File = null;
  fileImage: File = null;

  constructor(public _as: AdminService, private cd: ChangeDetectorRef,
    private route: ActivatedRoute, public router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        let id = params.get('id');
        if (id) {
          this._as.getProducto(id).subscribe((p: any) => {
            if (p) {
              this.f_producto.patchValue({
                id: p.id,
                nombre: p.nombre,
                categoria: p.categoria,
                formadeuso: p.formadeuso,
                envasado: p.envasado,
                senasa: p.senasa,
                clase_id: p.clase_id
              });
            }

            if(p.imagen) {
              this.imageUrl = environment.urlImages + p.imagen;
            }
          });
        }
      }
    );
    this._as.getClases().subscribe((clases: any) => this.clases = clases);
  }

  handleImageInput(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.fileImage = event.target.files[0];
      }
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();
    }
  }

  changeFileSenasa(event) {
    this.file_senasa = event.target.files[0];
  }

  changeFileEspecificaciones(event) {
    this.file_espe = event.target.files[0];
  }


  saveProducto() {
    Swal.showLoading();
    this._as.saveProducto(this.f_producto.value, this.fileImage, this.file_senasa, this.file_espe)
              .subscribe(resp => { 
                this.router.navigateByUrl('admin/producto');
                Swal.close();
              });
  }

}
