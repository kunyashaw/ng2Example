import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppComponent }  from './app.component';
import {demo01Component} from './demo01/app.demo01'
import {Demo02DataComponent} from './demo02Data/app.demo02Data'
import {Demo03Component} from './demo03/app.demo03'
import {Demo04Component} from './demo04/app.demo04'
import {Demo05Component} from './demo05_parent/demo05.component'
import {Demo06Component} from './demo06_son/demo06.component'
import {HeaderComponent} from './head/head.component'
import { Routes, RouterModule } from '@angular/router'
import {AppRoutingModule} from './app.route'
import { HttpModule, JsonpModule } from '@angular/http';
@NgModule({
  imports:      [AppRoutingModule, BrowserModule ,FormsModule,HttpModule],
  declarations: [ AppComponent,demo01Component ,Demo02DataComponent,Demo03Component,Demo04Component,Demo05Component,Demo06Component,HeaderComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
