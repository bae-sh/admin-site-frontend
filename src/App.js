import { useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import Router from './Router';
import { userIdState } from './atoms';

function App() {
    const user = localStorage.getItem('user');
    const setUserIdState = useSetRecoilState(userIdState);
    useEffect(() => {
        if (user) {
            setUserIdState(user);
        }
    }, []);

    return <Router />;
}

export default App;
