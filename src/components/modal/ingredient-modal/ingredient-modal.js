import ingredientModalStyles from './ingredient-modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientModal = () => {
    return (
            <div className={`${ingredientModalStyles.content} p-10 pb-15`}>
                <div className={`${ingredientModalStyles.title}`}>
                    <h3 className="text text_type_main-large">Детали ингредиента</h3>
                    <button className={`${ingredientModalStyles.close}`}>
                        <CloseIcon type="primary" />
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
    )
}

export default IngredientModal;