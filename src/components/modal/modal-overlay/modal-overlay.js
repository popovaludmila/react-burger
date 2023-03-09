import modalOverlayStyles from './modal-overlay.module.css';

const ModalOverlay = ({onClick}) => {
    return (
        <div className={`${modalOverlayStyles.container}`} onClick={onClick}></div>
    )
}

export default ModalOverlay;