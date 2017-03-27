import { Component, OnInit ,ViewChild} from '@angular/core';
import {TestService} from '../test.service'
import {Demo06Component} from '../demo06_son/demo06.component' 
@Component({
    moduleId: module.id,
    selector: 'demo05',
    templateUrl: 'demo05.component.html',
    providers:[TestService]
})
export class Demo05Component implements OnInit {
    //通过@ViewChild装饰器将Demo06Component注入进来，
    //并赋值给demo6Com，这个变量就是对子组件实例的引用，从而达到
    //从子组件到父组件数据交互的目的
    @ViewChild(Demo06Component)
    private demo6Com:Demo06Component;

    constructor(private testService:TestService) { }
   
    ngOnInit() { }

    getSonMsg = function(){
        alert(this.demo6Com.msg);
    }

    get = function(){
        return this.testService.count;
    }

    set = function(){
        console.log(this.demo6Com);
        this.testService.add();
    }
}