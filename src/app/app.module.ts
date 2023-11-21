import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActoresProviderService } from './core/providers/actores-provider.service';

import { BusquedaActoresComponent } from './website/busqueda-actores/busqueda-actores.component';
import { ResultadoActoresComponent } from './website/resultado-actores/resultado-actores.component';
import { SingleBusquedaActoresComponent } from './website/single-busqueda-actores/single-busqueda-actores.component';
import { SingleResultadoActoresComponent } from './website/single-resultado-actores/single-resultado-actores.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaActoresComponent,
    ResultadoActoresComponent,
    SingleBusquedaActoresComponent,
    SingleResultadoActoresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [ActoresProviderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
