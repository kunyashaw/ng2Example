import { Component, OnInit } from '@angular/core';

//ng中内置指令的使用 


@Component({
    moduleId: module.id,
    selector: 'demo07',
    templateUrl: 'demo07.component.html'
})
export class Demo07Component implements OnInit {
    constructor() { }
    ngOnInit() { }
    setClasses(){
        let classes = {
            red:true
        }
        return classes;
    }
}