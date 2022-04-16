import React from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AnnouncementList from './list';
import * as Styled from './styled';

const addItem = {
    name: '공지 올리기',
    id: 'add_announcement',
};

function AnnouncementContent() {
    const [toggleAddBtn, setToggleAddBtn] = React.useState(false);
    const { role } = JSON.parse(localStorage.getItem('user'));

    return (
        <Styled.Container>
            {role !== '회원' && (
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
                                        <Link to='/announcement/upload'>{addItem.name}</Link>
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
            <AnnouncementList />
        </Styled.Container>
    );
}

export default AnnouncementContent;
