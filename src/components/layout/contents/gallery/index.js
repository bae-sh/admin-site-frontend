import React from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import GalleryList from './list';
import * as Styled from '../styled';

const addItem = {
    name: '사진 올리기',
    id: 'add_gallery',
};

const authList = ['임원', '회장', '관리자'];

function GalleryContent() {
    const [toggleAddBtn, setToggleAddBtn] = React.useState(false);
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
                        {!toggleAddBtn ? (
                            <span
                                className='add_btn'
                                onClick={() => setToggleAddBtn(!toggleAddBtn)}
                                aria-hidden='true'
                            >
                                <FaPlus size={35} />
                            </span>
                        ) : (
                            <>
                                <li key={addItem.id}>
                                    <span className='add_link'>
                                        <Link to='/gallery/upload'>{addItem.name}</Link>
                                    </span>
                                </li>
                                <span
                                    className='add_btn'
                                    onClick={() => setToggleAddBtn(!toggleAddBtn)}
                                    aria-hidden='true'
                                >
                                    <FaTimes size={35} />
                                </span>
                            </>
                        )}
                    </ul>
                </div>
            )}
            {role ? <GalleryList /> : <div>로그인이 필요합니다.</div>}
        </Styled.Container>
    );
}

export default GalleryContent;
