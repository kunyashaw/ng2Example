import { Directive, ElementRef, Input, HostListener } from '@angular/core'

// 注意selector中中括号不能丢
@Directive({
    selector: '[customDirective]',
})
export class CustomDirective {
    constructor(private el: ElementRef) {
        // setTimeout(function () {
        //     this.highlight(this.highlightColor);
        // }.bind(this), 1000);

    }

    @Input('myColor')
    set Color(color: string) {
        console.log('color is '+color);
        this.highlight(color);
    };

    private highlight(color: string) {
        console.log(color);
        this.el.nativeElement.style.backgroundColor = color;
    }

}