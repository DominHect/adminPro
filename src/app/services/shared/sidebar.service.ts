import { Injectable } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Injectable()
export class SidebarService {

  menu: any[] = [];

  // menu: any = [
  //   {
  //     titulo: 'Principal',
  //     icono: 'mdi mdi-gauge',
  //     submenu: [
  //       { titulo: 'Dashboard', url: '/dashboard' },
  //       { titulo : 'ProgressBar', url: '/progress' },
  //       { titulo: 'Gráficas', url: '/graficas1' },
  //       { titulo: 'Promesas', url: '/promesas' },
  //       { titulo: 'Observables', url: '/observables' }
  //     ]
  //   },
  //   {
  //     titulo: 'Mantenimiento',
  //     icono: 'mdi mdi-folder-lock-open',
  //     submenu: [
  //       { titulo: 'Usuarios', url: '/usuarios' },
  //       { titulo: 'Médicos', url: '/medicos' },
  //       { titulo : 'Hospitales', url: '/hospitales' }
  //     ]
  //   }
  // ];

  constructor(
    public _usuarioService: UsuarioService
  ) { 
  }

  cargarMenu(){
    this.menu = this._usuarioService.menu;
  }



}
