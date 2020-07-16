import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromRegions from './regions.reducer';

export interface HomePageState {
    regions: fromRegions.RegionsState
}

export const dataReducers: ActionReducerMap<HomePageState> = {
    regions: fromRegions.reducer,
};

export const getDataState = createFeatureSelector<HomePageState>('data');


// Regions state
export const getRegionsState = createSelector(getDataState, (state: HomePageState) => state.regions);

export const getAllRegions = createSelector(getRegionsState, fromRegions.getRegions);
export const getRegionsLoading = createSelector(getRegionsState, fromRegions.getRegionsLoading);
export const getRegionsLoaded = createSelector(getRegionsState, fromRegions.getRegionsLoaded);
