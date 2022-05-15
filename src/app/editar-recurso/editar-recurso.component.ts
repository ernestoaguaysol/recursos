import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-editar-recurso',
  templateUrl: './editar-recurso.component.html',
  styleUrls: ['./editar-recurso.component.css']
})
export class EditarRecursoComponent implements OnInit {
  formularioDeRecurso:FormGroup;
  recursoId:any;

  constructor(
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    public formulario:FormBuilder,
    public router:Router,
  ) {
    
    this.recursoId=this.activeRoute.snapshot.paramMap.get('id')
    // console.log(this.recursoId);
    
    this.crudService.ObtenerRecurso(this.recursoId).subscribe(res => {
      console.log(res);
      this.formularioDeRecurso.setValue({
        nombre:res['title'],
        codigo:res['userId'],
        descripcion:res['body']
      })  
    })

    this.formularioDeRecurso=this.formulario.group({
      nombre:[''],
      codigo:[''],
      descripcion:['']
    })

   }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log(this.recursoId);
    console.log(this.formularioDeRecurso.value);
    this.crudService.EditarRecurso(
      this.recursoId,
      this.formularioDeRecurso.value
    )
    .subscribe(() => {
      this.router.navigateByUrl('/listar-recurso')
    })
    
  }

}
