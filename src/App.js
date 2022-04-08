import { useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import Router from './Router';
import { userIdState } from './atoms';

function App() {
    const user = JSON.parse(localStorage.getItem('user'));
    const setUserIdState = useSetRecoilState(userIdState);
    useEffect(() => {
        console.log(user, Date.now());
        if (user.expired < Date.now()) {
            localStorage.clear();
        } else if (user) {
            setUserIdState(user);
        }
    }, []);

    return <Router />;
}

export default App;
