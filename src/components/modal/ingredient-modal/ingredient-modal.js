import ingredientModalStyles from './ingredient-modal.module.css';

const IngredientModal = () => {
    return (
        <div className={ingredientModalStyles.container}>
            <div className={`${ingredientModalStyles.content} p-10 pb-15`}>
                <div className={`${ingredientModalStyles.title}`}>
                    <h3 className="text text_type_main-large">Детали ингредиента</h3>
                    <button className={`${ingredientModalStyles.close}`}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L9 7.58579L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L10.4142 9L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L9 10.4142L1.70711 17.7071C1.31658 18.0976 0.683417 18.0976 0.292893 17.7071C-0.0976311 17.3166 -0.0976311 16.6834 0.292893 16.2929L7.58579 9L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#F2F2F3"/>
                        </svg>
                    </button>
                </div>
                <div className={ingredientModalStyles.info}>
                    <img className={`${ingredientModalStyles.image}`} width="480" height="240" alt="Детали ингредиента" src="https://code.s3.yandex.net/react/code/meat-01.png" />
                    <p className="text text_type_main-medium pt-4 pb-8 pr-3 pl-3">Биокотлета из марсианской Магнолии</p>
                    <div className={`${ingredientModalStyles.calories}`}>
                        <div className={`${ingredientModalStyles.box} text text_type_main-default text_color_inactive`}>
                            <span className="text_color_inactive pt-2">Калории,ккал</span>
                            <span className="text_type_digits-default text_color_inactive">244,4</span>
                        </div>

                        <div className={`${ingredientModalStyles.box} text text_type_main-default text_color_inactive`}>
                            <span className="text_color_inactive pt-2">Белки, г</span>
                            <span className="text_type_digits-default text_color_inactive">12,2</span>
                        </div>

                        <div className={`${ingredientModalStyles.box} text text_type_main-default text_color_inactive`}>
                            <span className="text_color_inactive pt-2">Жиры, г</span>
                            <span className="text_type_digits-default text_color_inactive">17,2</span>
                        </div>

                        <div className={`${ingredientModalStyles.box} text text_type_main-default text_color_inactive`}>
                            <span className="text_color_inactive pt-2">Углеводы, г</span>
                            <span className="text_type_digits-default text_color_inactive">10,2</span>
                        </div>
                    
                    </div>  
                </div>
                
            </div>
        </div>
    )
}

export default IngredientModal;