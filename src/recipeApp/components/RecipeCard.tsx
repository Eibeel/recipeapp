import { RecipeCardDetails } from "./RecipeCardDetails";

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
}

export const RecipeCard = ({ altRecipe, altLikes, altHealth, imgRecipe, imgLikes, imgHealth, title, titleComplement, id, likes }: Props) => {

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
                    <RecipeCardDetails servings={18} time="55" />
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
    )
}
