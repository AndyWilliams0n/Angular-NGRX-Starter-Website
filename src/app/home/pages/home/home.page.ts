import {Component, OnDestroy, OnInit} from '@angular/core';
import {HomeHelperService} from '../../services/helper.service';
import {Observable, Subscription} from 'rxjs';
import * as fromDataReducers from '../../store/data/reducers';
import {select, Store} from '@ngrx/store';
import {HomePageState} from '../../store/data/reducers';
import {Region} from '../../models/region.model';

@Component({
    selector: 'app-base-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss']
})

export class HomePageComponent implements OnInit, OnDestroy{
    public regionsNGRX$: Observable<any>;
    public regionsNGRX: Region[] = [];
    public regionsNGRXSubscription: Subscription;

    constructor(
        public homeHelperService: HomeHelperService,
        private store: Store<HomePageState>,
    ) {
        this.regionsNGRX$ = this.store.pipe(
            select(fromDataReducers.getAllRegions)
        );
    }

    ngOnInit() {
        this.regionsNGRXSubscription = this.regionsNGRX$.subscribe((data: Region[]) => {
            this.regionsNGRX = data;
        })
    }

    ngOnDestroy() {
        this.regionsNGRXSubscription.unsubscribe();
    }
}
