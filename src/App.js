import { useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import Router from './Router';
import { userIdState } from './atoms';

function App() {
    const user = JSON.parse(localStorage.getItem('user'));
    const setUserIdState = useSetRecoilState(userIdState);
    useEffect(() => {
        if (user) {
            if (user.expire < Date.now()) {
                localStorage.clear();
                setUserIdState('');
            } else {
                setUserIdState(user);
            }
        }
    }, []);

    return <Router />;
}

export default App;
