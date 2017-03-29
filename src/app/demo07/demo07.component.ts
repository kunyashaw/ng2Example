import { Component, OnInit } from '@angular/core';

//ng中内置指令的使用 
@Component({
    moduleId: module.id,
    selector: 'demo07',
    templateUrl: 'demo07.component.html',
    styleUrls:['test.css']
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
    setStyles(){
        let styles={
            'color':'#ff0000',
            'font-size':'80px',
            'font-weight':'bold'
        }
        return styles;
    }

    flagMember = false;
    contactName="jack"
    list = ['Jack','Michael','John'];
}