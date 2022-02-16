import { Component, OnInit,  } from '@angular/core';
import { IProducts } from './interfaceProducts';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public products: IProducts[] = [
    {
      nameProduct: 'Красный носок',
      count: 0,
      cost: 0,
      general: 0,
      generalCalc() {
        this.general = this.count * this.cost;
      },
    },
    {
      nameProduct: 'Синий носок',
      count: 0,
      cost: 0,
      general: 0,
      generalCalc() {
        this.general = this.count * this.cost;
      },
    },
    {
      nameProduct: 'Бесцветный носок',
      count: 0,
      cost: 0,
      general: 0,
      generalCalc() {
        this.general = this.count * this.cost;
      },
    },
  ];
  constructor() { }

    ngOnInit(): void { }

  public generalCostAllProducts = () => {
     return Object.values(this.products).reduce(
      (acc: number, product: IProducts) => acc += product.general, 0)
  };
  sort() {

  }
}
