import React from 'react';
import * as Styled from './styled';

function Comment({ item }) {
    console.log(item);

    return (
        <Styled.Container>
            {item.comments.map((_item) => {
                return (
                    <div className='comment'>

                    </div>
                );
            })}
        </Styled.Container>
    );
}

export default Comment;
