import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ApiService } from '../../../services/api.service';

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
    private apiService:ApiService,
    public formulario:FormBuilder,
    public router:Router,
  ) {
    
    this.recursoId=this.activeRoute.snapshot.paramMap.get('id')
    // console.log(this.recursoId);
    
    this.apiService.ObtenerRecurso(this.recursoId).subscribe(res => {
      console.log(res);
      this.formularioDeRecurso.setValue({
        nombre:res['nombre'],
        descripcion:res['descripcion']
      })  
    })

    this.formularioDeRecurso=this.formulario.group({
      nombre:[''],
      descripcion:['']
    })

   }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log(this.recursoId);
    console.log(this.formularioDeRecurso.value);
    this.apiService.EditarRecurso(
      this.recursoId,
      this.formularioDeRecurso.value
    )
    .subscribe(() => {
      this.router.navigateByUrl('/recursos')
    })
    
  }

}
