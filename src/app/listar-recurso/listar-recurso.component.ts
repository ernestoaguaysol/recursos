import { Component, OnInit } from '@angular/core';

import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-listar-recurso',
  templateUrl: './listar-recurso.component.html',
  styleUrls: ['./listar-recurso.component.css']
})
export class ListarRecursoComponent implements OnInit {

  Recursos:any;

  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.ObtenerRecursos().subscribe(res => {
      console.log(res);
      this.Recursos=res
    })
  }

  eliminarRecurso(id:any, iControl:any){
    console.log(id);
    console.log(iControl);
    if (window.confirm("¿Desea eliminar este recurso?")) {
      this.crudService.EliminarRecurso(id).subscribe(res => {
        console.log(res);
        this.Recursos.splice(iControl,1)
      })
    }
  }

}
