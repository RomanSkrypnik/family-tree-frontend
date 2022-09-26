import React, { useEffect } from 'react';
import { useAppDispatch, useTypedSelector } from './hooks';
import { Header, DialogSwitch, BranchItem } from './components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ActionType } from './ts';

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
                {members.map((member) => <BranchItem member={member} key={member.id} />)}
            </ul>
            <DialogSwitch />
        </QueryClientProvider>
    );
}

export default App;
