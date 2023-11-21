import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActorList } from '../models/actorList.interface';

@Injectable({
  providedIn: 'root',
})
export class ActorsService {
  constructor(private httpClient: HttpClient) {}

  // Endpoints alfabeticamente

  private urlBusquedaFindByActorId =
    environment.baseUrl + environment.actors + '/findByActorId';
  private urlBusquedaFindByFirstName =
    environment.baseUrl + environment.actors + '/findByFirstName';
  private urlBusquedaFindByLastName =
    environment.baseUrl + environment.actors + '/findByLastName';
  private urlBusquedaDownloadPicture =
    environment.baseUrl + environment.actors + '/downloadPicture';
  private urlBusquedaGetAll =
    environment.baseUrl + environment.actors + '/getAll';
  private urlBusquedaGetAllActorsByPages =
    environment.baseUrl + environment.actors + '/getAllActorsByPages';

  /**
   * Retorna una lista de actores coincidentes con el nombre indicado
   * @argument name
   * @returns ActorList
   */
  getActorByFirstName(name: string): Observable<ActorList> {
    return this.httpClient.get<ActorList>(
      this.urlBusquedaFindByFirstName + '/' + name
    );
  }

  /**
   * Retorna una lista de actores coincidentes con el nombre indicado
   * @argument name
   * @returns ActorList
   */
  getActorByLastName(lastName: string): Observable<ActorList> {
    return this.httpClient.get<ActorList>(
      this.urlBusquedaFindByLastName + '/' + lastName
    );
  }

  /**
   * Retorna una lista de actores
   * @returns ActorList
   */
  getAllActors(): Observable<ActorList> {
    return this.httpClient.get<ActorList>(this.urlBusquedaGetAll);
  }
}
