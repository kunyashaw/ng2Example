import { Component, OnInit } from '@angular/core';
import {CustomDirective} from './custom.directive'
import {Custom2Directive} from './custom2.directive'

@Component({
    moduleId: module.id,
    selector: 'demo10',
    templateUrl: 'demo10.component.html'
})
export class Demo10Component implements OnInit {
    constructor() { }

    ngOnInit() { }
}