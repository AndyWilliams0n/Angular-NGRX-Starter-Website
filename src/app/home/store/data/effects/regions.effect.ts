import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import * as regionsActions from '../actions/regions.action';

import {switchMap, map, catchError} from 'rxjs/operators';
import {of} from 'rxjs';

import {DataService} from '../../../../services/data.service';

@Injectable()
export class RegionsEffects {
    constructor(
        private actions$: Actions,
        public dataService: DataService
    ) { }

    @Effect()
    loadRegions$ = this.actions$.pipe(
        ofType(regionsActions.LOAD_REGIONS),
        switchMap((action: any) => {
            // // LOG
            // console.log('EFFECT', action);

            return this.dataService.get(action.payload.url).pipe(
                map(regions => new regionsActions.LoadRegionsSuccess(regions)),
                catchError((error) => of(new regionsActions.LoadRegionsFail(error)))
            )

        })
    )
}
