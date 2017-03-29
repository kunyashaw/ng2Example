import { Directive, TemplateRef, Input,ViewContainerRef } 
from '@angular/core'

// 注意selector中中括号不能丢
@Directive({
    selector: '[myUnless]'
})
export class Custom2Directive {
    // TemplateRef 用来访问组件的模板
    // ViewContainerRef 视图内容渲染器，将模板内容插入DOM中
    constructor(private tpr: TemplateRef<any>,
    private vcr:ViewContainerRef) {
    }

    @Input('myUnless')
    set Flag(flag: boolean) {
        console.log('flag is '+flag);
        this.changeShow(flag);
    };

    private changeShow(flag: boolean) {
        console.log(flag);
        if(flag)
        {
            this.vcr.createEmbeddedView(this.tpr);
        }
        else{
            this.vcr.clear();
        }
    }

}