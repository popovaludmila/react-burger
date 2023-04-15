import { useParams } from "react-router-dom"
import IngredientModal from "../../components/modal/ingredient-modal/ingredient-modal"

export const IngredientDetailPage = () => {
    const {id} = useParams();
    
    return (
        <>
            <div>
                <IngredientModal />
            </div>
        </>
    )
}