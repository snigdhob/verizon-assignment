import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route3Component } from './route3/route3.component';
import { Route2Component } from './route2/route2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route3sub1Component } from './route3sub1/route3sub1.component';
import { Route3sub2Component } from './route3sub2/route3sub2.component';
import { Route3sub3Component } from './route3sub3/route3sub3.component';
import { Route3sub4Component } from './route3sub4/route3sub4.component';
import { Route1Component } from './route1/route1.component';

@NgModule({
  declarations: [
    AppComponent,
    Route3Component,
    Route2Component,
    Route3sub1Component,
    Route3sub2Component,
    Route3sub3Component,
    Route3sub4Component,
    Route1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
