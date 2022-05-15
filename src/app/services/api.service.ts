import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Recurso } from '../models/recurso.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API: string='http://localhost:8090'
  
  constructor(private clientHttp:HttpClient) { }

  ObtenerRecursos(){
    return this.clientHttp.get(this.API+"/api/recursos")
  }

  AgregarRecurso(datosRecurso:Recurso):Observable<any>{
    return this.clientHttp.post(this.API+"/api/recursos", datosRecurso)
  }

  EliminarRecurso(id:any):Observable<any>{
    return this.clientHttp.delete(this.API+"/api/recursos/"+id)
  }

  ObtenerRecurso(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"/api/recursos/"+id)
  }

  EditarRecurso(id:any,datosRecurso:Recurso):Observable<any>{
    return this.clientHttp.put(this.API+"/api/recursos/"+id, datosRecurso)
  }
}
