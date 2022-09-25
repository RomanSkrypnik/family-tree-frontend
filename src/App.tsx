import React, { useEffect } from 'react';
import { useAppDispatch, useTypedSelector } from './hooks';
import { Header, DialogSwitch, BranchItem } from './components';
import { ActionType } from './store/reducers/member';

function App() {
    const dispatch = useAppDispatch();
    const { members } = useTypedSelector(state => state.member);

    useEffect(() => {
        dispatch({ type: ActionType.FETCH_BRANCHES });
    }, []);

    return (
        <div className='App'>
            <Header />
            <ul style={{ display: 'flex' }}>
                {
                    members.map((member) => <BranchItem member={member} />)
                }
            </ul>
            <DialogSwitch />
        </div>
    );
}

export default App;
