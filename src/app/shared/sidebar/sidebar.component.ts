import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent  {


  get historial(): string[] {

    return this.gifServ.historial;
  }

  /**
   *
   */
  constructor(
    private readonly gifServ: GifsService
  ) {}

  //valor que obtenemos de los LI, y se lo pasamos a la peticion del servicio
  buscar(value: string){

    this.gifServ.buscarGifs(value);
  }


}
