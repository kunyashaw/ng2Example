import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
    moduleId: module.id,
    selector: 'demo02Data',
    templateUrl: 'app.demo022Data.html',
    providers: [HttpService]
})
export class Demo02DataComponent implements OnInit {
    @Input() phone:any;

    name: string = 'zhangsan';
    isMemeber: boolean = true;
    order = { user_addr: '', user_name: '',user_phone:'' };
    list: number[] = [10, 20, 30, 30];

    constructor(private httpService: HttpService) { }

    ngOnInit() { }

    print = function (): any {
        this.httpService.sendRequest('./app/demo02Data/test.json').subscribe((list: any) => {
            console.log(list);

        })
        console.log('btn is clicked');
    }
}
