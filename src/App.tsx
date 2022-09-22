import React, { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import { Header, DialogSwitch } from './components';
import { ActionType } from './store/reducers/member';
import { useGetParentList } from './hooks/useGetParentList';
import { useConvertIntoBranch } from './hooks/useConvertIntoBranch';

function App() {
    const dispatch = useAppDispatch();

    // const { branches } = useTypedSelector(state => state.branch);

    useConvertIntoBranch();

    useEffect(() => {
        dispatch({ type: ActionType.FETCH_BRANCHES });
    }, []);

    return (
        <div className='App'>
            <Header />
            {/*{*/}
            {/*    branches.map(({ members, id }) =>*/}
            {/*        <ul style={{ display: 'flex' }} key={id}>*/}
            {/*            <BranchItem member={members[0]} />*/}
            {/*        </ul>,*/}
            {/*    )*/}
            {/*}*/}
            <DialogSwitch />
        </div>
    );
}

export default App;
