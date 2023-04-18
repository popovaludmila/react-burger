import notFoundStyles from './not-found.module.css'

export const NotFoundPage = () => {
    return (
        <>
        <div className={`${notFoundStyles.main} mt-10`}> 
            <h1 className='text text_type_main-large'>Страница не найдена</h1>
        </div>
        </>
    )
}