import {
    UPDATE_CACHE,
    SET_CURRENT_DAY,
    SET_AUDIO_SOURCE
} from '../action-types';
import { getFileNamesFromS3, transformDate } from './archive-helpers';

const updateCache = data => ({
    type: UPDATE_CACHE,
    data
});

const setCurrentDay = data => ({
    type: SET_CURRENT_DAY,
    data
});

const setAudioSource = data => ({
    type: SET_AUDIO_SOURCE,
    data
});

const getFileNames = (dateString, dateObject) => {
    const currentDateReq = transformDate(dateString); // 2017/05/17

    return async (dispatch, getState) => {
        const { cache, currentDay } = getState();

        if (cache.hasOwnProperty(currentDateReq)) {
            return dispatch(setCurrentDay({
                date: [currentDateReq],
                fileNames: cache[currentDateReq]
            }));
        }

        try {
            const fileNames = await getFileNamesFromS3(currentDateReq);

            dispatch(setCurrentDay({
                date: [currentDateReq],
                fileNames
            }));
            dispatch(updateCache({ [currentDateReq]: fileNames }));
        } catch (e) {
            console.log(e);
            // report exception
        }
    };
};

export { getFileNames, setAudioSource };
