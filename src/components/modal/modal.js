import ReactDOM from 'react-dom';
import modalStyles from './modal.module.css';

const modal = document.getElementById("modal");

const Modal = ({children}) => {

    return ReactDOM.createPortal(
             
                <div className={`${modalStyles.container}`}>
                    <div className={`${modalStyles.content}`}>
                        {children}
                    </div>
                </div>,
               modal
         )
 }
 export default Modal;