import {
    UPDATE_CACHE,
    SET_CURRENT_DAY,
    SET_AUDIO_SOURCE
} from '../action-types';

const initialState = {
    cache: {},
    currentDay: {}
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CACHE:
        const { data } = action;

            return {
                ...state,
                cache: {
                    ...state.cache,
                    ...data
                }
            };

        case SET_CURRENT_DAY:
            return {
                ...state,
                currentDay: action.data
            };

        case SET_AUDIO_SOURCE:
            return {
                ...state,
                audioSource: action.data
            };

        default:
            return state;
    }
};
