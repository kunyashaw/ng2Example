import { Component, OnInit,Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'demo03',
    templateUrl: 'demo03.component.html'
})
export class Demo03Component implements OnInit {
    houseToSon = {name:'dabieye',price:999};
    letterToSon:string = '来自精神病院的一封信';
    
    msgFromSon:string='';
    constructor() { }
    ngOnInit() { }

    setValue = function(msg:any){
        this.msgFromSon = msg;
    }
}