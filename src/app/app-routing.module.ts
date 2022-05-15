import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importamos los componentes a las rutas
import { AgregarRecursoComponent } from './components/recurso/agregar-recurso/agregar-recurso.component'; 
import { EditarRecursoComponent } from './components/recurso/editar-recurso/editar-recurso.component';
import { ListarRecursoComponent } from './components/recurso/listar-recurso/listar-recurso.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'recursos'},
  {path: 'recursos', component:ListarRecursoComponent},
  {path: 'recursos/agregar', component:AgregarRecursoComponent},
  {path: 'recursos/editar/:id', component:EditarRecursoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
