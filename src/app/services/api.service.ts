import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Recurso } from '../models/recurso.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API: string='https://jsonplaceholder.typicode.com/'
  
  constructor(private clientHttp:HttpClient) { }

  AgregarRecurso(datosRecurso:Recurso):Observable<any>{
    return this.clientHttp.post(this.API+"posts", datosRecurso)
  }

  ObtenerRecursos(){
    return this.clientHttp.get(this.API+"posts")
  }

  EliminarRecurso(id:any):Observable<any>{
    return this.clientHttp.delete(this.API+"posts/"+id)
  }

  ObtenerRecurso(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"posts/"+id)
  }

  EditarRecurso(id:any,datosRecurso:Recurso):Observable<any>{
    return this.clientHttp.put(this.API+"posts/"+id, datosRecurso)
  }
}
