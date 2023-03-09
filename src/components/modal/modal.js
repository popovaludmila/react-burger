import ReactDOM from 'react-dom';
import modalStyles from './modal.module.css';
import PropTypes from 'prop-types';
import ModalOverlay from './modal-overlay/modal-overlay';

const modal = document.getElementById("modal");

const Modal = ({children, onOverlayClick}) => {
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
    onOverlayClick: PropTypes.func.isRequired
}

 export default Modal;