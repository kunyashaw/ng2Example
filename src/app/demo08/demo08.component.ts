import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'demo08_pipe',
    templateUrl: 'demo08.component.html'
})
export class Demo08PipeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    birthday = new Date();
    stu = {name:'zzl',age:27};
    a:number = 3.1415926;
    b:number = 34567;
    price = 20;
    count = 0.34;
    userSex = 'female'
}