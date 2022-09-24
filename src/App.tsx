import React, { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import { Header, DialogSwitch, BranchItem } from './components';
import { ActionType } from './store/reducers/member';
import { useConvertIntoRecursive } from './hooks/useConvertIntoRecursive';

function App() {
    const dispatch = useAppDispatch();
    const members = useConvertIntoRecursive();

    useEffect(() => {
        dispatch({ type: ActionType.FETCH_BRANCHES });
    }, []);

    return (
        <div className='App'>
            <Header />
            {
                members.map((member) =>
                    <BranchItem member={member} />,
                )
            }
            <DialogSwitch />
        </div>
    );
}

export default App;
