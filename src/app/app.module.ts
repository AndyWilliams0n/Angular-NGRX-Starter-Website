import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {DataService} from './services/data.service';

// NGRX
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

export const metaReducers: MetaReducer[] = !environment.production ? [] : [];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        EffectsModule.forRoot([]),
        StoreModule.forRoot({}, { metaReducers, runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true } }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],

    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})

export class AppModule { }
