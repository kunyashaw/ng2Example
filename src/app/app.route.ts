import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';

import { demo01Component } from './demo01/app.demo01'
import { Demo02DataComponent } from './demo02Data/app.demo02Data'
import { Demo03Component } from './demo03/app.demo03'
import { Demo07Component } from './demo07/demo07.component'
import { Demo05Component } from './demo05_parent/demo05.component'
import { Demo08PipeComponent } from './demo08/demo08.component'
import { Demo09Component } from './demo09/demo09.component'
import { Demo10Component } from './demo10/demo10.component'
import { Demo11Component } from './demo11/demo11.component'
// 。路由器使用先匹配者优先的策略来匹配路由，所以，具体路由应该放在通用路由的前面。
//在上面的配置中，带静态路径的路由被放在了前面，后面是空路径路由，因此它会作为默认路由。
//而通配符路由被放在最后面，这是因为它能匹配上每一个URL，
//因此应该只有在前面找不到其它能匹配的路由时才匹配它。


const routes: Routes = [
    { path: 'demo01', component: demo01Component },
    { path: 'demo02', component: Demo02DataComponent },
    { path: 'demo03', component: Demo03Component },
    { path: 'demo05', component: Demo05Component },
    { path: 'demo07', component: Demo07Component },
    { path: 'demo08', component: Demo08PipeComponent },
    { path: 'demo09', component: Demo09Component },
    { path: 'demo10', component: Demo10Component },
    { path: 'demo11', component: Demo11Component },
    { path: '', redirectTo: '/demo01', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
