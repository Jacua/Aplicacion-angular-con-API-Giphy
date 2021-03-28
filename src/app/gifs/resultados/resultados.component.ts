import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif } from '../interfaces/searchGitResp';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  /**
   *
   */

  get resultados(): Gif[] {

    return this._gifServi._resultados;
  }

  constructor(private readonly _gifServi: GifsService) {
    
  }

}
