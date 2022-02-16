import { AfterContentChecked, ChangeDetectorRef, Component, OnInit, } from '@angular/core';
import { IProducts } from './interfaceProducts';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterContentChecked {

  public generalCost: number = 0;
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

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void { }

  ngAfterContentChecked(): void {
    this.generalCostAllProducts();
    this.cdr.detectChanges();
  }
  public generalCostAllProducts = () => {
    this.products.reduce(
      (acc: number, product: IProducts) => {
        acc += product.general;
        return this.generalCost = acc;
      }, 0);
  };

  public sort() {
    if (this.sortByDecrease) {
      this.products.sort((a: IProducts, b: IProducts) => a.general - b.general);
      this.sortByDecrease = false;
    } else if (!this.sortByDecrease) {
      this.products.sort((b: IProducts, a: IProducts) => a.general - b.general);
      this.sortByDecrease = true;
    }
  }
}
