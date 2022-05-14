import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Recurso } from '../models/recurso.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string='https://jsonplaceholder.typicode.com/posts'
  
  constructor(private clientHttp:HttpClient) { }

  AgregarRecurso(datosRecurso:Recurso):Observable<any>{
    return this.clientHttp.post(this.API, datosRecurso)
  }
}
