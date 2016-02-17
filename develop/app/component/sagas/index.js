/**
 * Created by Spencer on 16/2/17.
 */
import {put} from 'redux-saga';
function *sagas() {
    yield put({type: 'ACTION'});
}

import createSagaMiddleware from 'redux-saga';
let middleware = createSagaMiddleware(sagas);
export default middleware;