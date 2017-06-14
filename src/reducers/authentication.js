/**
 * Created by Bien on 2017-06-13.
 */
import {
    CHANGE_AUTH
} from '../actions/types';

export default function(state = false, action) {
    switch(action.type) {
        case CHANGE_AUTH:
            return action.payload;
    }

    return state;
}