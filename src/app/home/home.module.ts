import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomePageComponent} from './pages/home/home.page';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {dataReducers, dataEffects} from './store';

import {HomeHelperService} from './services/helper.service';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        StoreModule.forFeature('data', dataReducers),
        EffectsModule.forFeature(dataEffects),

    ],
    declarations: [
        HomePageComponent,
    ],
    exports: [

    ],
    providers: [
        HomeHelperService
    ],
})

export class HomeModule {}
