import ReactDOM from 'react-dom';
import modalStyles from './modal.module.css';
import ModalOverlay from './modal-overlay/modal-overlay';
import { useEffect } from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../services/actions';
import { useNavigate } from "react-router-dom";

const modal = document.getElementById("modal") as HTMLElement;

type TModalProps = {
    children: JSX.Element;
    modalTitle: string;
    onCloseClick?: () => void;
}

const Modal = ({children, modalTitle, onCloseClick}: TModalProps): JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClick = () => {
        navigate(-1);
        if (onCloseClick) {
            onCloseClick();
        }
        dispatch(closeModal());
    }

    useEffect(() => {
        const onEscKeydown = (evt: KeyboardEvent) => {
            if( evt.key === 'Escape') {
                onClick()
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
                        <button className={`${modalStyles.close}`} onClick={onClick}>
                            <CloseIcon type="primary" />
                        </button>
                    </div>
                
                    {children}
                </div>
            </div>
            <ModalOverlay onClick={onClick}/>
        </> ,
        modal
    )
 }

 export default Modal;