import { Component, OnInit } from "@angular/core";
import { HospitalService } from "../../services/service.index";
import { ModalUploadService } from "../../components/modal-upload/modal-upload.service";
import { Hospital } from "../../models/hospital.model";

declare var swal: any;

@Component({
  selector: "app-hospitales",
  templateUrl: "./hospitales.component.html",
  styles: []
})
export class HospitalesComponent implements OnInit {
  hospitales: Hospital[] = [];

  totalRegistros: number = 0;
  cargando: boolean = true;

  constructor(
    public _hospitalService: HospitalService,
    public _modalUploadService: ModalUploadService
  ) {}

  ngOnInit() {
    this.cargarHospitales();
    this._modalUploadService.notificacion.subscribe(resp =>
      this.cargarHospitales()
    );
  }

  buscarHospital(termino: string) {
    if (termino.length <= 0) {
      this.cargarHospitales();
      return;
    }

    this.cargando = true;
    this._hospitalService
      .buscarHospitales(termino)
      .subscribe((hospitales: Hospital[]) => {
        this.hospitales = hospitales;
        this.cargando = false;
      });
  }

  cargarHospitales() {
    this.cargando = true;
    this._hospitalService.cargarHospitales().subscribe(hospitales => {
      this.totalRegistros = this._hospitalService.totalHospitales;
      this.hospitales = hospitales;
      this.cargando = false;
    });
  }

  borrarHospital(hospital: Hospital) {
    swal({
      title: "¿Esta seguro?",
      text: "Esta a punto de borrar " + hospital.nombre,
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(borrar => {
      if (borrar) {
        this._hospitalService
          .borrarHospital(hospital._id)
          .subscribe(borrado => {
            this.cargarHospitales();
          });
      }
    });
  }

  guardarHospital(hospital: Hospital) {
    this._hospitalService.actualizarHospital(hospital).subscribe();
  }

  mostrarModal(id: string) {
    this._modalUploadService.mostrarModal("hospitales", id);
  }

  crearHospital() {
    swal({
      title: 'Crear hospital',
      text: 'Introduzca nombre del hospital',
      content: 'input',
      icon: 'info',
      buttons: true,
      dangerMode: true
    }).then(valor => {
      if (valor) {
        this._hospitalService.crearHospital( valor )
            .subscribe(borrado => {
            this.cargarHospitales();
          });
      }
    });
  }
}
