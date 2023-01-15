import iconPortion from '../../assets/icons/ic_portion.svg'
import iconTime from '../../assets/icons/ic_time.svg'
import iconChef from '../../assets/icons/ic_chef.svg'

type Props = {
    servings: number;
    time: number;
}

export const RecipeCardDetails = ({ servings, time }: Props) => {
    return (
        <div id='recipe_info_container'>
            <div className="recipe_info">
                <div className='recipe_details_container'>
                    <img src={iconPortion} alt="Porcion" />
                    <span className='title_details'>Tamaño de la porción</span>
                    <span>{servings}</span>
                </div>
                <div className='recipe_details_container'>
                    <img src={iconTime} alt="Preparacion" />
                    <span className='title_details'>Tiempo de preparación</span>
                    <span>{time}</span>
                </div>
                <div className='recipe_details_container'>
                    <img src={iconChef} alt="Dificultad" />
                    <span className='title_details'>Dificultad</span>
                    <span>Facil</span>
                </div>
            </div>
        </div>
    )
}
