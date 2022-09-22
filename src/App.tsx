import React, { useEffect } from 'react';
import { useAppDispatch, useTypedSelector } from './hooks';
import { BranchItem, Header } from './components';
import { ActionType } from './store/reducers/branch';

function App() {
    const dispatch = useAppDispatch();

    const { branches } = useTypedSelector(state => state.branch);

    useEffect(() => {
        dispatch({ type: ActionType.FETCH_BRANCHES });
    }, []);

    return (
        <div className='App'>
            <Header />
            {
                branches.map(({ members, id }) =>
                    <ul style={{ display: 'flex' }} key={id}>
                        <BranchItem member={members[0]} />
                    </ul>,
                )
            }
        </div>
    );
}

export default App;
