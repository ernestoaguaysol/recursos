import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarRecursoComponent } from './components/recurso/agregar-recurso/agregar-recurso.component';
import { EditarRecursoComponent } from './components/recurso/editar-recurso/editar-recurso.component';
import { ListarRecursoComponent } from './components/recurso/listar-recurso/listar-recurso.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    AgregarRecursoComponent,
    EditarRecursoComponent,
    ListarRecursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
