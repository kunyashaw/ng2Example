import { Component, OnInit } from '@angular/core';
import { myHttpService } from './myhttp.service'

@Component({
    moduleId: module.id,
    selector: 'demo11',
    templateUrl: 'demo11.component.html',
    providers: [myHttpService]
})

export class Demo11Component implements OnInit {
    //一定记得加上private，否则就找不到hs的方法
    constructor(private hs: myHttpService) {
        console.log(hs);
    }

    ngOnInit() { }

    get = function () {
        this.hs.speak();
        this.hs.sendGetRequest('./app/demo11/dishList.json').subscribe((list: any) => {
            console.log(list);
        })
    }

    post = function () {
        var obj = {name:'123',age:20};
        var objStr = JSON.stringify(obj);
        this.hs.sendPostRequest('./app/demo11/dishList.json',objStr).subscribe(
            (list: any) => {console.log(list);},
            (error: any) => { console.log(error);},
        )}
}