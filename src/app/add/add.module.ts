import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AddRoutingModule} from './add-routing.module';
import {AddPageComponent} from './pages/add/add.page';

@NgModule({
    imports: [
        CommonModule,
        AddRoutingModule,
    ],
    declarations: [
        AddPageComponent,
    ],
    exports: [

    ],
    providers: [

    ],
})

export class AddModule {}
