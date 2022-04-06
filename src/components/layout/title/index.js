import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styled';

function Title(props) {
    const { title, description } = props;
    return (
        <Styled.Container>
            <div className='title_main'>{title}</div>
            <div className='title_description'>{description}</div>
        </Styled.Container>
    );
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Title;
