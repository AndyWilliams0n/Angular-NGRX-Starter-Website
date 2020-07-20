import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {DataService} from '../../services/data.service';

import {Store} from '@ngrx/store';
import {HomePageState} from '../store';

import * as fromDataActions from './../store/data/actions'

@Injectable()
export class HomeHelperService {
    constructor(
        private store: Store<HomePageState>
    ) {}

    public fetchUsingHttpAndNGRX() {
        this.store.dispatch(new fromDataActions.LoadRegions({
            url: 'https://api.com/regions'
        }));
    }

    public removeFromNGRX() {
        this.store.dispatch(new fromDataActions.ResetRegions());
    }
}
