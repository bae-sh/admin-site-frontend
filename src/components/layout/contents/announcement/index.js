import React from 'react';
import { Link } from 'react-router-dom';
import AnnouncementList from './list';
import * as Styled from '../styled';

const addItem = {
    name: '공지 올리기',
    id: 'add_announcement',
};

const authList = ['임원', '회장', '관리자'];

function AnnouncementContent() {
    const [role, setRole] = React.useState('');

    React.useEffect(() => {
        if (localStorage.getItem('user')) {
            setRole(JSON.parse(localStorage.getItem('user')).role);
        }
    }, []);

    return (
        <Styled.Container>
            {authList.includes(role) && (
                <div className='add_post'>
                    <ul className='add_list'>
                        <li key={addItem.id}>
                            <Link to='/announcement/upload'>
                                <span className='add_link'>{addItem.name}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
            <AnnouncementList />
        </Styled.Container>
    );
}

export default AnnouncementContent;
