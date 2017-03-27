import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'IncludeContent',
    template: `<div>
    <ng-content select="header"></ng-content>
    </div>`
})
export class HeaderComponent {
}