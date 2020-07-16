import {Region} from '../../../models/region.model';

import * as fromRegions from '../actions/regions.action';

export interface RegionsState {
    data: Region[],
    loaded: boolean,
    loading: boolean,
}

export const initialState: RegionsState = {
    data: [],
    loaded: false,
    loading: false,
};

export function reducer(
    state: RegionsState = initialState,
    action: fromRegions.RegionsAction
): RegionsState {
    switch (action.type) {
        case fromRegions.LOAD_REGIONS: {
            return {
                ...state,
                loading: true,
            }
        }

        case fromRegions.LOAD_REGIONS_SUCCESS: {
            const data = action.payload;

            return {
                ...state,
                loading: false,
                loaded: true,
                data,
            }
        }

        case fromRegions.LOAD_REGIONS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
                data: []
            }
        }

        case fromRegions.RESET_REGIONS: {
            return initialState;
        }

        default: {
            return state;
        }
    }
}

export const getRegionsLoading = (state: RegionsState) => state.loading;
export const getRegionsLoaded = (state: RegionsState) => state.loaded;
export const getRegions = (state: RegionsState) => state.data;

