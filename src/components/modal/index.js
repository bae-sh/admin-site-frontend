import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { useRecoilState } from 'recoil';
import { FaTimes } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
import { modalVisibleState } from '../../atoms';
import Nav from '../nav';
import Logo from '../../images/logo/admin_logo2.svg';
import * as Styled from './styled';

function Modal() {
    const navigate = useNavigate();
    const [modalVisible, setModalVisible] = useRecoilState(modalVisibleState);
    const nodeRef = React.useRef(null);
    const [width, setWidth] = React.useState(window.innerWidth);

    const resizeHandler = () => {
        setWidth(window.innerWidth);
    };

    React.useEffect(() => {
        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

    React.useEffect(() => {
        if (width > 1023 && modalVisible) {
            setModalVisible(!modalVisible);
        }
    }, [width]);

    return ReactDOM.createPortal(
        <CSSTransition in={modalVisible} timeout={600} classNames='modal' unmountOnExit>
            <Styled.Container modalVisible={modalVisible}>
                <div className='modalHeader'>
                    <input
                        type='image'
                        className='headerLogo'
                        src={Logo}
                        alt='Logo'
                        onClick={() => {
                            if (modalVisible) {
                                setModalVisible(false);
                            }
                            navigate('/');
                        }}
                    />
                    <div
                        className='headerRight'
                        onClick={() => setModalVisible(!modalVisible)}
                        aria-hidden='true'
                    >
                        <FaTimes size={20} />
                    </div>
                </div>
                <div className='modalBody'>
                    <Nav className='modalNav' />
                </div>
            </Styled.Container>
        </CSSTransition>,
        document.getElementById('modal-root'),
    );
}

export default Modal;
