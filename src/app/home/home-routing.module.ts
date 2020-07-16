import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomePageComponent} from './pages/home/home.page';

const homeRoutes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
    {
        path: 'home',
        component: HomePageComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]
})

export class HomeRoutingModule {}
