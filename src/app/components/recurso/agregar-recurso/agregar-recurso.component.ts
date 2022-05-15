import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-agregar-recurso',
  templateUrl: './agregar-recurso.component.html',
  styleUrls: ['./agregar-recurso.component.css']
})
export class AgregarRecursoComponent implements OnInit {

  formularioDeRecurso:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private apiService:ApiService,
    private router:Router
    ) {
    this.formularioDeRecurso=this.formulario.group({
      nombre:[''],
      descripcion:['']
    })
  }

  ngOnInit(): void {
  }

  enviarDatos(): any {
    console.log('Entra a enviarDatos');
    console.log(this.formularioDeRecurso.value);
    this.apiService.AgregarRecurso(this.formularioDeRecurso.value).subscribe()
    this.router.navigateByUrl('/recursos')
  }

}
