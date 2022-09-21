import React from 'react';
import { useAppDispatch } from './hooks';
import { fetchBranches } from './store/actions/actionCreator';

function App() {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        // @ts-ignore
        dispatch(fetchBranches());
    }

    return (
        <div className='App'>
            <button onClick={handleClick}>CLICK</button>
        </div>
    );
}

export default App;
