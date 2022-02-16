import { Injectable } from '@angular/core';
import { IProducts } from './products.interface';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  public products: IProducts[] = [
    {
      nameProduct: 'Красный носок',
      count: 0,
      cost: 0,
      general: 0
    },
    {
      nameProduct: 'Синий носок',
      count: 0,
      cost: 0,
      general: 0
    },
    {
      nameProduct: 'Бесцветный носок',
      count: 0,
      cost: 0,
      general: 0
    },
  ];

  constructor() { }

}
