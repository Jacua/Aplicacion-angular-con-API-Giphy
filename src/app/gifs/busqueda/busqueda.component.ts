import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  //ViewChild decorador que nos permite buscar el elemento que pasamos como argumento en el html
  @ViewChild('txtBuscar') txtBuscar !: ElementRef <HTMLInputElement>; //!: indicamos y aseguramos que el elemento nunca sera nulo

  constructor(
    private readonly _gifsServi: GifsService
  ){}

  buscar(){

   const valor = this.txtBuscar.nativeElement.value;

   if(valor.trim().length ===0){
     
    return;
   }

   this.txtBuscar.nativeElement.value= ''

   this._gifsServi.buscarGifs(valor);
  }
}
