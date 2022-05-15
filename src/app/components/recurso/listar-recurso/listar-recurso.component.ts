import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-listar-recurso',
  templateUrl: './listar-recurso.component.html',
  styleUrls: ['./listar-recurso.component.css']
})
export class ListarRecursoComponent implements OnInit {

  Recursos:any;

  constructor(
    private apiService:ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.ObtenerRecursos().subscribe(res => {
      console.log(res);
      this.Recursos=res
    })
  }

  eliminarRecurso(id:any, iControl:any){
    console.log(id);
    console.log(iControl);
    if (window.confirm("¿Desea eliminar este recurso?")) {
      this.apiService.EliminarRecurso(id).subscribe(res => {
        console.log(res);
        this.Recursos.splice(iControl,1)
      })
    }
  }

}
