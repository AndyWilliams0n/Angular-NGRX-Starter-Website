import {Action} from '@ngrx/store';
import {Region} from '../../../models/region.model';

export const LOAD_REGIONS = '[Data] Load Regions';
export const LOAD_REGIONS_FAIL = '[Data] Load Regions Fail';
export const LOAD_REGIONS_SUCCESS = '[Data] Load Regions Success';
export const RESET_REGIONS = '[Data] Reset Regions';


export class LoadRegions implements Action {
    readonly type = LOAD_REGIONS;
    constructor(public payload: {
        url: string
    }) {}
}

export class LoadRegionsFail implements Action {
    readonly type = LOAD_REGIONS_FAIL;
    constructor(public payload: any) {}
}

export class LoadRegionsSuccess implements Action {
    readonly type = LOAD_REGIONS_SUCCESS;
    constructor(public payload: Region[]) {}
}

export class ResetRegions implements Action {
    readonly type = RESET_REGIONS
}


// action types
export type RegionsAction =
    | LoadRegions
    | LoadRegionsFail
    | LoadRegionsSuccess
    | ResetRegions
