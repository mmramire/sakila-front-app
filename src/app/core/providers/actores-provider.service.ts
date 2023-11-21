import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActoresProviderService {
  private currentPageSubject: BehaviorSubject<number> =
    new BehaviorSubject<number>(DEFAULT_INITIAL_PAGE);
  public currentPage$: Observable<number> =
    this.currentPageSubject.asObservable();

  private pageSizeSubject: BehaviorSubject<number> =
    new BehaviorSubject<number>(DEFAULT_ITEMS_PER_PAGE);
  public pageSize$: Observable<number> = this.pageSizeSubject.asObservable();

  private collectionSizeSubject: BehaviorSubject<number> =
    new BehaviorSubject<number>(DEFAULT_EMPTY_COLLECTION_SIZE);
  public collectionSize$: Observable<number> =
    this.collectionSizeSubject.asObservable();

  constructor() {
    console.log('se creo el provider');
  }

  getCurrentPage(): number {
    return this.currentPageSubject.value;
  }

  setCurrentPage(page: number): void {
    this.currentPageSubject.next(page);
  }

  getPageSize(): number {
    return this.pageSizeSubject.value;
  }

  setPageSize(pageSize: number): void {
    this.pageSizeSubject.next(pageSize);
    this.resetActualPage();
  }

  getCollectionSize(): number {
    return this.collectionSizeSubject.value;
  }

  setCollectionSize(amount: number) {
    this.collectionSizeSubject.next(amount);
  }

  resetActualPage(): void {
    //para que arranque de la 1ra pagina
    this.setCurrentPage(DEFAULT_INITIAL_PAGE);
  }
}

const DEFAULT_EMPTY_COLLECTION_SIZE = 0;
const DEFAULT_INITIAL_PAGE = 1;
const DEFAULT_ITEMS_PER_PAGE = 10;
