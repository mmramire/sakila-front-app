import { Component, OnInit } from '@angular/core';
import { ActorsService } from 'src/app/core/services/actors.service';

@Component({
  selector: 'app-busqueda-actores',
  templateUrl: './busqueda-actores.component.html',
  styleUrls: ['./busqueda-actores.component.scss'],
})
export class BusquedaActoresComponent implements OnInit {
  constructor(private actorsService: ActorsService) {}

  ngOnInit(): void {
    // this.actorsService.getAllActors().subscribe((data) => console.log(data));

    this.actorsService
      .getActorByFirstName('Adam')
      .subscribe((data) => console.log(data));
  }
}
