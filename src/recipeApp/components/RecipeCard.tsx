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
            <ul className="container">
                <li className="container_recipes">
                    <img src={imgRecipe} alt={altRecipe} className="container_recipes__recipe" />

                    <div className="container_info">
                        <span className="container_info__title">{title}</span>
                        <div className="container_info__ratings">
                            <div>
                                <img src={imgLikes} alt={altLikes} className="container_info__ratings_reaction" />
                                <span>{likes}</span>
                            </div>
                            <div>
                                <img src={imgHealth} alt={altHealth} className="container_info__ratings_reaction" />
                            </div>
                        </div>
                    </div>

                    <div className="container_info__recipe">
                        <div className="container_info__recipe_hover">
                            <img src={iconPortion} alt="Porciones" className="container_info__recipe_img"/>
                            <span className="container_info__recipe_text">Tamaño de la porción</span>
                            <span className="container_info_recipe_text_data">{servings}</span>
                        </div>
                        <div className="container_info__recipe_hover">
                            <img src={iconTime} alt="Preparación" className="container_info__recipe_img"/>
                            <span className="container_info__recipe_text">Tiempo de preparación</span>
                            <span className="container_info_recipe_text_data">{time}</span>
                        </div>
                        <div className="container_info__recipe_hover">
                            <img src={iconChef} alt="Dificultad" className="container_info__recipe_img"/>
                            <span className="container_info__recipe_text">Dificultad</span>
                            <span className="container_info_recipe_text_data">Dificil</span>
                        </div>
                    </div>

                </li>
            </ul>
        </div>
    );
};
