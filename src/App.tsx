import React, { useEffect } from 'react';
import { useAppDispatch, useTypedSelector } from './hooks';
import { Header, DialogSwitch, BranchItem } from './components';
import { ActionType } from './store/reducers/member';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
    const dispatch = useAppDispatch();
    const { members } = useTypedSelector(state => state.member);

    useEffect(() => {
        dispatch({ type: ActionType.FETCH_MEMBERS });
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <Header />
            <ul className='main-row'>
                {members.map((member) => <BranchItem member={member} />)}
            </ul>
            <DialogSwitch />
        </QueryClientProvider>
    );
}

export default App;
