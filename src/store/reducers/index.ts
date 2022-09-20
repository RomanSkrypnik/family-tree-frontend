import { ActionCreator, combineReducers } from 'redux';

const test = (state = {}, action: ActionCreator<any>) => {
    return state;
}

const reducer = combineReducers({
    test,
});

export default reducer;
