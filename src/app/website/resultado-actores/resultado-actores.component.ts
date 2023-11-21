import { Component, Input, OnInit } from '@angular/core';
import { ActorList } from 'src/app/core/models/actorList.interface';
import { ActoresProviderService } from 'src/app/core/providers/actores-provider.service';

@Component({
  selector: 'app-resultado-actores',
  templateUrl: './resultado-actores.component.html',
  styleUrls: ['./resultado-actores.component.scss'],
})
export class ResultadoActoresComponent implements OnInit {
  @Input() listadoActores: ActorList = [];

  page!: number;
  pageSize!: number;
  collectionSize!: number;

  //Utilizado en el checkbox
  amountOfItems = [
    { id: 10, label: 10 },
    { id: 20, label: 20 },
    { id: 30, label: 30 },
  ];
  selectedItemId: number | null = null; // Inicialmente no hay ningún elemento seleccionado

  constructor(private actoresProviderService: ActoresProviderService) {
    this.page = this.actoresProviderService.getCurrentPage();
    this.pageSize = this.actoresProviderService.getPageSize();
    this.collectionSize = this.actoresProviderService.getCollectionSize();
    console.log('COLLECTION SIZE -> ' + this.collectionSize);
  }

  ngOnInit(): void {
    this.actoresProviderService.currentPage$.subscribe((page) => {
      this.page = page;
    });
    this.actoresProviderService.pageSize$.subscribe((pageSize) => {
      this.pageSize = pageSize;
    });
    this.actoresProviderService.collectionSize$.subscribe((collectionSize) => {
      this.collectionSize = collectionSize;
    });
  }

  changeAmountItemsPerPage(itemsPerPage: number) {
    this.actoresProviderService.setPageSize(itemsPerPage);
    this.selectedItemId = itemsPerPage;
  }

  openPicture(actorId: number): void {
    // TODO: Abrir modal y pasar los datos del actor
    alert(`Actor id ${actorId}`);
    // TODO: Pedir la imagen al BACKEND
    // TODO: Abrir un modal y mostrar la imagen
  }
}
