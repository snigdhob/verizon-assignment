import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { Route3sub1Component } from '../route3sub1/route3sub1.component';
import { Route3sub2Component } from '../route3sub2/route3sub2.component';
import { Route3sub3Component } from '../route3sub3/route3sub3.component';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.scss']
})
export class Route3Component implements OnInit {

  constructor(private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver) { }

  ngOnInit(): void {
    // const componentFactorya = this.cfr.resolveComponentFactory(Route3sub1Component);
    // const componentFactoryb = this.cfr.resolveComponentFactory(Route3sub2Component);
    // const componentFactoryc = this.cfr.resolveComponentFactory(Route3sub3Component);
    // this.viewContainerRef.createComponent(componentFactorya);
    // this.viewContainerRef.createComponent(componentFactoryb);
    // this.viewContainerRef.createComponent(componentFactoryc);
  }

}
