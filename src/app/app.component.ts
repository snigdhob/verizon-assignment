import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment';

  constructor(private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver){}

  async getRoute1() {
    this.viewContainerRef.clear();
    const { Route1Component } = await import('./route1/route1.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(Route1Component)
    );
  }

  async getRoute2() {
    this.viewContainerRef.clear();
    const { Route2Component } = await import('./route2/route2.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(Route2Component)
    );
  }

  async getRoute3() {
    this.viewContainerRef.clear();
    const { Route3Component } = await import('./route3/route3.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(Route3Component)
    );
  }

  async getRoute4() {
    this.viewContainerRef.clear();
    const { Route4Component } = await import('./route4/route4.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(Route4Component)
    );
  }

  async getRoute5() {
    this.viewContainerRef.clear();
    const { Route5Component } = await import('./route5/route5.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(Route5Component)
    );
  }
}
