import React, { useEffect } from 'react';
import { useAppDispatch, useTypedSelector } from './hooks';
import { fetchBranches } from './store/actions/actionCreator';
import { BranchItem } from './components';

function App() {
    const dispatch = useAppDispatch();

    const { branches } = useTypedSelector(state => state.branch);

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchBranches());
    }, []);


    return (
        <div className='App'>
            {
                branches.map(({ members, id }) =>
                    <ul key={id}>
                        <BranchItem member={members[0]} />
                    </ul>,
                )
            }
        </div>
    );
}

export default App;
