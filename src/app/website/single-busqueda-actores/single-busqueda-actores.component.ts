import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ActoresProviderService } from 'src/app/core/providers/actores-provider.service';
import { ActorsService } from 'src/app/core/services/actors.service';

import { Constantes } from 'src/app/constantes';
import { ActorList } from 'src/app/core/models/actorList.interface';
import { ActorSearchDTO } from 'src/app/core/models/actorSearchDTO.interface';

@Component({
  selector: 'app-single-busqueda-actores',
  templateUrl: './single-busqueda-actores.component.html',
  styleUrls: ['./single-busqueda-actores.component.scss'],
})
export class SingleBusquedaActoresComponent implements OnInit {
  //Datos
  resultadoBusqueda: ActorList = [];

  // Para paginación
  pageSize: number;

  //Defino por fuera para simplificar la obtención del dato del formControl
  formBusquedaActores = {
    firstName: new FormControl<string | null>(
      null,
      Validators.pattern(Constantes.VALIDAR_SOLO_LETRAS)
    ),
    lastName: new FormControl<string | null>(
      null,
      Validators.pattern(Constantes.VALIDAR_SOLO_LETRAS)
    ),
  };

  formGroupBusquedaActores!: FormGroup;

  constructor(
    private actorsService: ActorsService,
    private actoresProviderService: ActoresProviderService
  ) {
    this.pageSize = actoresProviderService.getPageSize();
  }

  ngOnInit(): void {
    this.inicializarCamposFormularioBusqueda();
  }
  inicializarCamposFormularioBusqueda() {
    this.formGroupBusquedaActores = new FormGroup(this.formBusquedaActores);
  }

  // onSubmit(): void {
  //   console.log('Envio formulario busqueda');
  //   if (this.formGroupBusquedaActores.invalid) {
  //     alert('Formulario con datos inválidos');
  //     return;
  //   }

  //   const actorSearch: ActorSearchDTO = {
  //     firstName: this.formBusquedaActores.firstName.value,
  //     lastName: this.formBusquedaActores.lastName.value,
  //   };

  //   console.log(this.formGroupBusquedaActores);
  //   console.log(actorSearch);
  //   //TODO: petición por parametros.
  // }

  searchByFirstName(): void {
    // const actorSearch: ActorSearchDTO = {
    //   firstName: this.formBusquedaActores.firstName.value,
    //   lastName: this.formBusquedaActores.lastName.value,
    // };

    const firstName = this.formBusquedaActores.firstName.value;
    if (firstName) {
      //Forma nueva de subscripcion de RXJS a partir de >6.4
      this.actorsService.getActorByFirstName(firstName).subscribe({
        next: (data) => (this.resultadoBusqueda = data),
        error: (e) => console.error(e),
        complete: () => console.info('complete'),
      });
    }
  }

  searchByLastName(): void {
    const lastName = this.formBusquedaActores.lastName.value;

    if (lastName) {
      //Forma nueva de subscripcion de RXJS a partir de >6.4
      this.actorsService.getActorByLastName(lastName).subscribe({
        next: (data) => (this.resultadoBusqueda = data),
        error: (e) => console.error(e),
        complete: () => console.info('complete'),
      });
    }
  }
}
