import React, { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import QnaList from './list';
import * as Styled from './styled';

const addItem = {
    name: 'Q&A 올리기',
    id: 'add_qna',
};

function QnAContent() {
    const [toggleAddBtn, setToggleAddBtn] = useState(false);
    return (
        <Styled.Container>
            <div>
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
                                    <Link to='/qna/upload'>{addItem.name}</Link>
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
            <QnaList />
        </Styled.Container>
    );
}

export default QnAContent;
