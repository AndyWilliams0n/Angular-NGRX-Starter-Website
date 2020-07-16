import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'add',
        loadChildren: () => import('./add/add.module').then(mod => mod.AddModule)
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule { }
