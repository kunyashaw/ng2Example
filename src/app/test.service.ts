import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

    count:number = 0;
    constructor() { }

    public add=function(){
        this.count++;
    }
}