import { Component, OnInit, OnChanges,SimpleChange,Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'demo04',
    templateUrl: 'demo04.component.html'
})
export class Demo04Component implements OnInit {
    // @Input() message:any;

    houseMsg: string;
    @Input()
    set house(result: any) {
        console.log(result);
        if (result.price > 200) {
            this.houseMsg = result.name + "是真的!!";
        }
        else {
            this.houseMsg = result.name + "逗我玩恩";
        }
    }
    @Input() letter: any;
    @Output() funcShow = new EventEmitter();

    constructor() { }
    ngOnInit() { }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}){
        console.log(changes);
    }

    inputTxt: string = "myFriend:";
    showMsg = function () {
        console.log(this.funcShow);
        this.funcShow.emit(this.inputTxt);
    }


    zhenxinhua = '就坑我吧';


}