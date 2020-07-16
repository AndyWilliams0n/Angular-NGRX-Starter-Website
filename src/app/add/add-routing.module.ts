import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AddPageComponent} from './pages/add/add.page';

const addRoutes: Routes = [
    {
        path: '',
        component: AddPageComponent,
    },
    {
        path: 'add',
        component: AddPageComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(addRoutes)],
    exports: [RouterModule]
})

export class AddRoutingModule {}
