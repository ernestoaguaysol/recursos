import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-agregar-recurso',
  templateUrl: './agregar-recurso.component.html',
  styleUrls: ['./agregar-recurso.component.css']
})
export class AgregarRecursoComponent implements OnInit {

  formularioDeRecurso:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService
    ) {
    this.formularioDeRecurso=this.formulario.group({
      nombre:[''],
      codigo:['']
    })
  }

  ngOnInit(): void {
  }

  enviarDatos(): any {
    console.log('Entra a enviarDatos');
    console.log(this.formularioDeRecurso.value.nombre);
    this.crudService.AgregarRecurso({
      id: 1,
      title: this.formularioDeRecurso.value.nombre,
      body: this.formularioDeRecurso.value.nombre,
      userId: this.formularioDeRecurso.value.codigo
    })
    .subscribe()
  }

}
