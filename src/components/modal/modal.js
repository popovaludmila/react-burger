import modalStyles from './modal.module.css';

const Modal = (children) => {
    return (
             <div className={`${modalStyles.container}`}>
                 <div className={`${modalStyles.content}`}>
                    {children}
                 </div>
             </div>
         )
 }

 export default Modal;