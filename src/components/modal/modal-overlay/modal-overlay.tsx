import modalOverlayStyles from './modal-overlay.module.css';

type TModalOverlayProps = {
    onClick: () => void;
}

const ModalOverlay = ({onClick}: TModalOverlayProps): JSX.Element => {
    return (
        <div data-test="modal_overlay" className={`${modalOverlayStyles.container}`} onClick={onClick}></div>
    )
}

export default ModalOverlay;