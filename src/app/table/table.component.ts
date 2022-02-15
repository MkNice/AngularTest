import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public generalCostAllItems: number = 0;

  public products = {
    redSock: {
      count: 0,
      cost: 0,
      general: 3,
      generalCalc() {
        this.general = this.count * this.cost;
      },
    },
    blueSock: {
      count: 0,
      cost: 0,
      general: 3,
      generalCalc() {
        this.general = this.count * this.cost;
      },
    },
    insipid: {
      count: 0,
      cost: 0,
      general: 0,
      generalCalc() {
        this.general = this.count * this.cost;
      },
    },
  };
  constructor() {
  }

  ngOnInit(): void {
  }
  public generalCostAllProducts = () => {
    debugger
    Object.values(this.products).reduce(
      (a: any, b: any) => this.generalCostAllItems += b.general, 0);
  };
}
