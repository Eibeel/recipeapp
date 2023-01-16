import iconPortion from "../../assets/icons/ic_portion.svg";
import iconTime from "../../assets/icons/ic_time.svg";
import iconChef from "../../assets/icons/ic_chef.svg";

type Props = {
    altRecipe: string;
    altLikes: string;
    altHealth: string;
    imgRecipe: string;
    imgLikes: string;
    imgHealth: string;
    title: string;
    titleComplement: string;
    id: string;
    likes: number;
    servings: number;
    time: string;
};

export const RecipeCard = ({
    altRecipe,
    altLikes,
    altHealth,
    imgRecipe,
    imgLikes,
    imgHealth,
    title,
    titleComplement,
    likes,
    servings,
    time,
}: Props) => {
    return (
        <div>
            <div className="container_recipe_image">
                <img src={imgRecipe} alt={altRecipe} className="recipe_image" />
            </div>
            <div id="recipes">
                <div className="recipe_container">
                    <div className="recipe_title">
                        <span>{title}</span>
                        <span className="title_complement">{titleComplement}</span>
                    </div>
                    <div id="recipe_info_container">
                        <div className="recipe_info">
                            <div className="recipe_details_container">
                                <img className="icon_container" src={iconPortion} alt="Porcion" />
                                <span className="title_details">Tamaño de la porción</span>
                                <span>{servings}</span>
                            </div>
                            <div className="recipe_details_container">
                                <img className="icon_container" src={iconTime} alt="Preparacion" />
                                <span className="title_details">Tiempo de preparación</span>
                                <span>{time}</span>
                            </div>
                            <div className="recipe_details_container">
                                <img className="icon_container" src={iconChef} alt="Dificultad" />
                                <span className="title_details">Dificultad</span>
                                <span>Facil</span>
                            </div>
                        </div>
                    </div>
                    <div className="recipe_rating">
                        <div className="recipe_rating__icons">
                            <img src={imgLikes} alt={altLikes} />
                            <span>{likes}</span>
                        </div>
                        <div className="recipe_rating__icons">
                            <img src={imgHealth} alt={altHealth} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
