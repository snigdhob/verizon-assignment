import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { Route3sub1Component } from '../route3sub1/route3sub1.component';
import { Route3sub2Component } from '../route3sub2/route3sub2.component';
import { Route3sub3Component } from '../route3sub3/route3sub3.component';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.scss']
})
export class Route2Component implements OnInit {

  productList: { name: string; price: number; }[] = [];
  view: string = 'grid';
  filter: string = 'asc';

  constructor(private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver) { }

  ngOnInit(): void {    
    this.initializeProducts();
  }

  initializeProducts() {
    for (let i = 1; i <= 40; i++) {
      const obj: { name: string; price: number; } = { name: `Product ${i}`, price: i };
      this.productList.push(obj);
    }
  }

  onChangeFilter(){
    const coefficient = this.filter === 'desc' ? -1 : 1;
    this.productList.sort((a,b) => coefficient * (a.price - b.price));
  }

}
