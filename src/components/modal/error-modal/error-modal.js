import errorModalStyles from './error-modal.module.css';
import PropTypes from 'prop-types';

export const ErrorModal = ({errorMessage}) => {
    return (
        <>
            <div className={`${errorModalStyles.content} p-20 pt-30`}>
                <h3 className='text text_type_main-medium'> {errorMessage} </h3>
            </div>
        </>
    )
}

ErrorModal.propTypes = {
    errorMessage: PropTypes.string
}