import { Component, Input, OnInit } from '@angular/core';
import { ActoresProviderService } from 'src/app/core/providers/actores-provider.service';
import { ActorList } from 'src/app/core/models/actorList.interface';

@Component({
  selector: 'app-single-resultado-actores',
  templateUrl: './single-resultado-actores.component.html',
  styleUrls: ['./single-resultado-actores.component.scss'],
})
export class SingleResultadoActoresComponent implements OnInit {
  @Input() listadoActores: ActorList = [];

  constructor(private actoresProviderService: ActoresProviderService) {}

  ngOnInit(): void {
    console.log('onInit ResultadoActores');
  }

  openPicture(actorId: number): void {
    // TODO: Abrir modal y pasar los datos del actor
    // TODO: Pedir la imagen al BACKEND
    // TODO: Abrir un modal y mostrar la imagen
  }
}
