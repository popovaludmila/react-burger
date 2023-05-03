import errorModalStyles from './error-modal.module.css';

type TErrorModalProps = {
    errorMessage: string;
}

export const ErrorModal = ({errorMessage}: TErrorModalProps): JSX.Element => {
    return (
        <>
            <div className={`${errorModalStyles.content} p-20 pt-30`}>
                <h3 className='text text_type_main-medium'> {errorMessage} </h3>
            </div>
        </>
    )
}