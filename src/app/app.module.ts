import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSortModule} from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { Route5Component } from './route5/route5.component';
import { HttpClientModule } from '@angular/common/http';
import { Route4sub1Component } from './route4sub1/route4sub1.component';
import { Route4sub2Component } from './route4sub2/route4sub2.component';
import { Route4sub3Component } from './route4sub3/route4sub3.component';
import { Route4sub4Component } from './route4sub4/route4sub4.component';
import { Route4Component } from './route4/route4.component';

@NgModule({
  declarations: [
    AppComponent,
    Route3Component,
    Route2Component,
    Route3sub1Component,
    Route3sub2Component,
    Route3sub3Component,
    Route3sub4Component,
    Route1Component,
    Route5Component,
    Route4Component,
    Route4sub1Component,
    Route4sub2Component,
    Route4sub3Component,
    Route4sub4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
