import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styled';

function Comment(props) {
    const { id, kind } = props;
    return <Styled.Container>{kind}</Styled.Container>;
}

Comment.propTypes = {
    id: PropTypes.string.isRequired,
    kind: PropTypes.string.isRequired,
};

export default Comment;
