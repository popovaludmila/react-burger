import ReactDOM from 'react-dom';
import modalStyles from './modal.module.css';
import PropTypes from 'prop-types';
import ModalOverlay from './modal-overlay/modal-overlay';
import { useEffect } from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../services/actions';

const modal = document.getElementById("modal");

const Modal = ({children, modalTitle}) => {
    const dispatch = useDispatch();

    const onCloseClick = () => {
        dispatch(closeModal())
    }

    useEffect(() => {
        const onEscKeydown = (evt) => {
            if( evt.key === 'Escape') {
              onCloseClick()
            };
          } 

        document.addEventListener('keydown', onEscKeydown)
        return () => {
            document.removeEventListener('keydown', onEscKeydown);
        }
    })

    return ReactDOM.createPortal(   
        <>
            <div className={`${modalStyles.container}`}>
                <div className={`${modalStyles.content}`}>
                    <div className={`${modalStyles.title}`}>
                        <h3 className="text text_type_main-large">{modalTitle}</h3>
                        <button className={`${modalStyles.close}`} onClick={onCloseClick}>
                            <CloseIcon type="primary" />
                        </button>
                    </div>
                
                    {children}
                </div>
            </div>
            <ModalOverlay onClick={onCloseClick}/>
        </> ,
        modal
    )
 }

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    modalTitle: PropTypes.string.isRequired
}

 export default Modal;