import loaderStyles from './loader.module.css';

export const Loader = (): JSX.Element => {
    return (
        <>
            <div className={`${loaderStyles.wrapper} p-25 pt-29 pb-29`}>
                <div className={loaderStyles.ring}></div>
                <p className='text text_type_main-medium pt-15 pb-2'>
                    Идет обработка заказа. Дождитесь номера заказа.
                </p>
            </div>
        </>
    )
}