import modalOverlayStyles from './modal-overlay.module.css';

type TModalOverlayProps = {
    onClick: () => void;
}

const ModalOverlay = ({onClick}: TModalOverlayProps): JSX.Element => {
    return (
        <div className={`${modalOverlayStyles.container}`} onClick={onClick}></div>
    )
}

export default ModalOverlay;