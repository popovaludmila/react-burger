import ReactDOM from 'react-dom';
import modalStyles from './modal.module.css';
import PropTypes from 'prop-types';

const modal = document.getElementById("modal");

const Modal = ({children}) => {

    return ReactDOM.createPortal(    
        <div className={`${modalStyles.container}  ref={modalRef}`}>
            <div className={`${modalStyles.content}`}>
                {children}
            </div>
        </div>,
        modal
    )
 }

Modal.propTypes = {
    children: PropTypes.element.isRequired
}

 export default Modal;