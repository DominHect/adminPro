import { Injectable } from "@angular/core";
import { Hospital } from "../../models/hospital.model";
import { HttpClient } from "@angular/common/http";
import { URL_SERVICIOS } from "../../config/config";

import "rxjs/add/operator/map";
import { Router } from "@angular/router";
import { SubirArchivoService } from "../subir-archivo/subir-archivo.service";
import { UsuarioService } from "../usuario/usuario.service";

@Injectable()
export class HospitalService {
  hospital: Hospital;
  token: string;
  totalHospitales: number = 0;

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService,
    public router: Router,
    public _subirArchivoService: SubirArchivoService
  ) {
    this.token = this._usuarioService.token;
  }

  cargarHospitales() {
    let url = `${URL_SERVICIOS}/hospital`;
    return this.http.get(url).map((resp: any) => {
      this.totalHospitales = resp.total;
      return resp.hospitales;
    });
  }

  obtenerHospital(id: string) {
    let url = `${URL_SERVICIOS}/hospital/${id}`;
    return this.http.get(url).map((resp: any) => resp.hospital);
  }

  borrarHospital(id: string) {
    let url = `${URL_SERVICIOS}/hospital/${id}/?token=${this.token}`;

    return this.http.delete(url).map((resp: any) => {
      swal("Hospital borrado", "El hospital ha sido eliminado", "success");
    });
  }

  crearHospital(nombre: string) {
    let url = `${URL_SERVICIOS}/hospital?token=${this.token}`;

    return this.http.post(url, { nombre }).map((resp: any) => {
      swal("Hospital creado", resp.hospital.nombre, "success");
      return resp.hospital;
    });
  }

  buscarHospitales(termino: string) {
    let url = `${URL_SERVICIOS}/busqueda/coleccion/hospitales/${termino}`;
    return this.http.get(url).map((resp: any) => resp.hospitales);
  }

  actualizarHospital(hospital: Hospital) {
    let url = `${URL_SERVICIOS}/hospital/${hospital._id}?token=${this.token}`;
    return this.http.put(url, hospital).map((resp: any) => {
      swal("Hospital editado", "El hospital ha sido editado", "success");
      return resp.hospital;
    });
  }
}
