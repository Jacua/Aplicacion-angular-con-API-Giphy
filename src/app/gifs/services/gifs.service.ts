import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearhGIFResponse } from '../interfaces/searchGitResp';


@Injectable({
  providedIn: 'root' // permite que el servicio sea global sin necesidad de importarlo en modulos

})
export class GifsService {

  private _historial: string [] = [];
  private url: string = 'https://api.giphy.com/v1/gifs'; 
  private apiKey: string = '8VyUh0eKUwNyWjnNpFkgL4kY9Z1SNveZ'
  public _resultados: Gif [] = [];


  get historial(){

    return [...this._historial];

  }

  get resultados(){
    return[...this.resultados];
  }

  constructor(private readonly _http: HttpClient) {
      if(localStorage.getItem('gifs')){

        this._historial = JSON.parse(localStorage.getItem('gifs'));

      }

      if(localStorage.getItem('result')){

        this._resultados= JSON.parse(localStorage.getItem('result'));

      }
   }

  buscarGifs(query: string){

    query = query.trim().toLowerCase();

    if(!this._historial.includes(query)){

      this._historial.unshift( query );

      this._historial= this._historial.slice(0,9);

      localStorage.setItem('gifs',JSON.stringify(this._historial));

      
    }

    //peticion http sin async await o fech

    //construccion de parametros de la peticion para una mejor estructura de la mimas
    const params = new HttpParams()
          .set('api_key',this.apiKey)
          .set('limit','10')
          .set('q',query);

    this._http.get <SearhGIFResponse> (`${this.url}/search`,{params})
    .subscribe((resp) =>{

      console.log(resp.data);

      this._resultados = resp.data;

      localStorage.setItem('result',JSON.stringify(this._resultados));

    });

    
  }
}
