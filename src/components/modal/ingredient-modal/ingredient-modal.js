import ingredientModalStyles from './ingredient-modal.module.css';
import { ingredientPropTypes } from '../../../utils/prop-types';

const IngredientModal = ({item}) => {
    const {image, name, calories, proteins, fat, carbohydrates} = item;

    return (
        <div className={`${ingredientModalStyles.content} p-10 pb-15 pt-25`}>
            <div className={`${ingredientModalStyles.info} pt-2`}>
                <img src={image} className={`${ingredientModalStyles.image}`} width="480" height="240" alt="Детали ингредиента" />
                <p className="text text_type_main-medium pt-4 pb-8 pr-3 pl-3">{name}</p>
                <div className={`${ingredientModalStyles.calories}`}>
                    <div className={`${ingredientModalStyles.box} text text_type_main-default text_color_inactive`}>
                        <span className="text_color_inactive pt-2">Калории,ккал</span>
                        <span className="text_type_digits-default text_color_inactive">{calories}</span>
                    </div>

                    <div className={`${ingredientModalStyles.box} text text_type_main-default text_color_inactive`}>
                        <span className="text_color_inactive pt-2">Белки, г</span>
                        <span className="text_type_digits-default text_color_inactive">{proteins}</span>
                    </div>

                    <div className={`${ingredientModalStyles.box} text text_type_main-default text_color_inactive`}>
                        <span className="text_color_inactive pt-2">Жиры, г</span>
                        <span className="text_type_digits-default text_color_inactive">{fat}</span>
                    </div>

                    <div className={`${ingredientModalStyles.box} text text_type_main-default text_color_inactive`}>
                        <span className="text_color_inactive pt-2">Углеводы, г</span>
                        <span className="text_type_digits-default text_color_inactive">{carbohydrates}</span>
                    </div>
                
                </div>  
            </div>
        </div>
    )
}

IngredientModal.propTypes = {
    item: ingredientPropTypes.isRequired,
}

export default IngredientModal;