/**
 * Created by Spencer on 16/2/17.
 */

function app(state='', action) {
    switch (action.type) {
        case 'FOO': {
            return 'bar';
        }
        default:
            return state;
    }
}

import {combineReducers} from 'redux';
let reducers = combineReducers({
    content: app
});

export default reducers;