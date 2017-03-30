import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'IncludeContent',
    template: `<div>
    <ng-content select="header"></ng-content>
    <a routerLink='/demo08'>demo08</a>
    <a routerLink="/demo02"> demo02 </a>
    <a routerLink="/demo03"> demo03 </a>
    <a routerLink="/demo05"> demo05 </a>
    <a routerLink="/demo07"> demo7 </a>
    <a routerLink="/demo09"> demo9 </a>
    <a routerLink="/demo10"> demo10 </a>
    <a routerLink="/demo11"> demo11 </a>
    </div>`
})
export class HeaderComponent {
}