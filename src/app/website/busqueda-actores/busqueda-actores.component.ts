import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ActorList } from 'src/app/core/models/actorList.interface';
import { ActoresProviderService } from 'src/app/core/providers/actores-provider.service';
import { ActorsService } from 'src/app/core/services/actors.service';

@Component({
  selector: 'app-busqueda-actores',
  templateUrl: './busqueda-actores.component.html',
  styleUrls: ['./busqueda-actores.component.scss'],
})
export class BusquedaActoresComponent {
  //Datos
  resultadoBusqueda: ActorList = [];

  // Para paginación
  pageSize: number;

  constructor(
    private actorsService: ActorsService,
    private actoresProviderService: ActoresProviderService
  ) {
    this.pageSize = actoresProviderService.getPageSize();
  }

  // private buscarTodosLosActores() {
  //   this.actorsService.getAllActors().subscribe(
  //     (data) => {
  //       console.log(data);
  //     },
  //     (error) => console.error(error)
  //   );
  // }

  //Opcion
  async buscarTodosLosActores() {
    try {
      this.resultadoBusqueda = await firstValueFrom(
        this.actorsService.getAllActors()
      );
      if (!this.resultadoBusqueda.length) {
        console.error('No se encontraron resultados');
        alert('No se encontraron resultados');
      } else {
        this.actoresProviderService.setCollectionSize(
          this.resultadoBusqueda.length
        );
        console.log(
          'SETEO DE TOTAL LISTADO ' +
            this.actoresProviderService.getCollectionSize()
        );
        alert(
          `Busqueda finalizada. Encontrados ${this.resultadoBusqueda.length} resultados.`
        );
        console.log(this.resultadoBusqueda);
      }
    } catch (error: any) {
      console.error(error);
    }
  }
}
