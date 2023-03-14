import ReactDOM from 'react-dom';
import modalStyles from './modal.module.css';
import PropTypes from 'prop-types';
import ModalOverlay from './modal-overlay/modal-overlay';
import { useEffect } from 'react';

const modal = document.getElementById("modal");

const Modal = ({children, onOverlayClick, onCloseClick}) => {

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
                    {children}
                </div>
            </div>
            <ModalOverlay onClick={onOverlayClick}/>
        </> ,
        modal
    )
 }

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    onOverlayClick: PropTypes.func.isRequired,
    onCloseClick: PropTypes.func.isRequired
}

 export default Modal;