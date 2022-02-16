import { Component, OnInit, } from '@angular/core';
import { IProducts } from './products.interface';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  public generalCost: number = 0;
  public sortByDecrease: boolean = true;

  constructor(private tableService: TableService) { }

  ngOnInit(): void { }

  public rowSumCalc(num: number, product: IProducts, typeOf: string = 'cost'): void {
    this.generalCost = 0;
    if (typeOf === 'count') {
      product.general = product.cost * num;
    } else {
      product.general = product.count * num;
    }
    this.updateGeneralCost();
  }

  public updateGeneralCost(): void {
    this.tableService.products.forEach((element: IProducts) => {
      this.generalCost += element.general;
    });
  }

  public sort() {
    this.sortByDecrease = !this.sortByDecrease;
    this.sortByDecrease
      ? this.tableService.products.sort((a: IProducts, b: IProducts) => a.general - b.general)
      : this.tableService.products.sort((a: IProducts, b: IProducts) => b.general - a.general);
  }
}
