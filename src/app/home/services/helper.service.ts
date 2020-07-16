import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {filter, tap} from 'rxjs/operators';

import {DataService} from '../../services/data.service';

import {select, Store} from '@ngrx/store';
import {HomePageState} from '../store';

import * as fromDataActions from './../store/data/actions'
import * as fromDataReducers from './../store/data/reducers'

@Injectable()
export class HomeHelperService {
    constructor(
        public dataService: DataService,
        private store: Store<HomePageState>
    ) {}

    public fetchUsingHttp(): Observable<any> {
        const url = 'https://api.com/regions';

        return this.dataService.get(url);
    }

    public fetchUsingHttpAndNGRX(): Observable<any> {
        return this.store.pipe(
            select(fromDataReducers.getAllRegions),

            filter((regions) => !!regions),

            tap(regions => {
                if (!regions.length) {
                    this.store.dispatch(new fromDataActions.LoadRegions({
                        url: 'https://api.com/regions'
                    }));
                }
            }),
        )
    }

    public removeFromNGRX() {
        this.store.dispatch(new fromDataActions.ResetRegions());
    }
}
