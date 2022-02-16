import { Component, OnInit, } from '@angular/core';
import { IProducts } from './interfaceProducts';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public sortByDecrease: boolean = true;
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

  public generalCostAllProducts = () => { // Need refactoring cause
    return this.products.reduce( // ! Error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '0'. Current value: '-1'
      (acc: number, product: IProducts) => acc += product.general, 0);
  };

  sort() {
    if (this.sortByDecrease) {
      this.products.sort((a: IProducts, b: IProducts) => a.general - b.general);
      this.sortByDecrease = false;
    } else if(!this.sortByDecrease) {
      this.products.sort((b: IProducts, a: IProducts) => a.general - b.general);
      this.sortByDecrease = true;
    }
  }
}
