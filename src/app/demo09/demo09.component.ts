import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'demo09',
    templateUrl: 'demo09.component.html'
})
export class Demo09Component implements OnInit {
    constructor() { }

    ngOnInit() { }
    order = {
        userName: '',
        userSex: 'male',
        isRemember: true,
        userColor: 'red',
        userMovie:'IronMan',
        userPhone:''
    };
    colorList = ['red', 'green', 'blue'];

    movieList = ['IronMan','SuperMan','SpiderMan'];

    submitOrder = function(){
        console.log(this.order);
    }
}