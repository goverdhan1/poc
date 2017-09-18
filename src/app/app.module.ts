import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NvD3Module } from 'ng2-nvd3';

import 'd3';
import 'nvd3';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NvD3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
