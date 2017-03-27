import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service'
@Component({
    moduleId: module.id,
    selector: 'demo06',
    templateUrl: 'demo06.component.html'
})
export class Demo06Component implements OnInit {
    count:number = 0;
    msg = '老爷子，晚上我带女朋友回家吃饭';
    constructor(private testService: TestService) { }

    ngOnInit() { }
    get = function () {
        this.count =  this.testService.count;
    }

}