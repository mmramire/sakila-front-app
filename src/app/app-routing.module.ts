import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BusquedaActoresComponent } from './website/busqueda-actores/busqueda-actores.component';
import { SingleBusquedaActoresComponent } from './website/single-busqueda-actores/single-busqueda-actores.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'busqueda', pathMatch: 'full' },
  { path: 'busqueda', component: BusquedaActoresComponent, pathMatch: 'full' },
  {
    path: 'singleBusqueda',
    component: SingleBusquedaActoresComponent,
    pathMatch: 'full',
  },
  // all your other routes should come first
  { path: 'page-not-found', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
