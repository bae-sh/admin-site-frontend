import React from 'react';
import { Link } from 'react-router-dom';
import GalleryList from './list';
import * as Styled from '../styled';

const addItem = {
    name: '사진 올리기',
    id: 'add_gallery',
};

const authList = ['임원', '회장', '관리자'];

function GalleryContent() {
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
                            <Link to='/gallery/upload'>
                                <span className='add_link'>{addItem.name}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
            {role ? <GalleryList /> : <div>로그인이 필요합니다.</div>}
        </Styled.Container>
    );
}

export default GalleryContent;
