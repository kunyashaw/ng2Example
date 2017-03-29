import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { demo01Component } from './demo01/app.demo01'
import { Demo02DataComponent } from './demo02Data/app.demo02Data'
import { Demo03Component } from './demo03/app.demo03'
import { Demo04Component } from './demo04/app.demo04'
import { Demo05Component } from './demo05_parent/demo05.component'
import { Demo06Component } from './demo06_son/demo06.component'
import { Demo07Component } from './demo07/demo07.component'
import { Demo08PipeComponent } from './demo08/demo08.component'
import { Demo09Component } from './demo09/demo09.component'
import { Demo10Component } from './demo10/demo10.component'
import {CustomDirective} from './demo10/custom.directive'
import {Custom2Directive} from './demo10/custom2.directive'
import { SexPipe } from './demo08/custom.pipe'
import { HeaderComponent } from './head/head.component'
import { Routes, RouterModule } from '@angular/router'
import { AppRoutingModule } from './app.route'
import { HttpModule, JsonpModule } from '@angular/http';
@NgModule({
  imports: [AppRoutingModule, BrowserModule, FormsModule, HttpModule],
  declarations: [SexPipe,Custom2Directive, CustomDirective,Demo10Component, Demo09Component, AppComponent, Demo08PipeComponent, Demo07Component, demo01Component, Demo02DataComponent, Demo03Component, Demo04Component, Demo05Component, Demo06Component, HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
