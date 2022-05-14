import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importamos los componentes a las rutas
import { AgregarRecursoComponent } from './agregar-recurso/agregar-recurso.component'; 
import { EditarRecursoComponent } from './editar-recurso/editar-recurso.component';
import { ListarRecursoComponent } from './listar-recurso/listar-recurso.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'agregar-recurso'},
  {path: 'agregar-recurso', component:AgregarRecursoComponent},
  {path: 'listar-recurso', component:ListarRecursoComponent},
  {path: 'editar-recurso/:id', component:EditarRecursoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
