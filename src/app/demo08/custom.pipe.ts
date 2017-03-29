import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sex'
})

export class SexPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        if(value == 'male'){
            return '男'
        }
        else if(value == "female")
        {
            return '女'
        }
        else{
            return '???'
        }
    }
}