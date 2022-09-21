import { Action } from 'redux';

const initialState = {
    count: 0,
};

const counter = (state = initialState, { type }: Action<any>) => {
    switch (type) {
        case 'INCREASE_COUNT':
            return { ...state, count: state.count + 1 };
        case 'DECREASE_COUNT':
            console.log('decrease');
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

export default counter;
