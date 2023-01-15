type Props = {
    altRecipe: string;
    altLikes: string;
    altHealth: string;
    imgRecipe: string;
    imgLikes: string;
    imgHealth: string;
    title: string;
    titleComplement: string;
    id: number;
    servings: number;
    time: number;
    likes: number;
    healthScore: number;
}

export const RecipeCard = ({ altRecipe, altLikes, altHealth, imgRecipe, imgLikes, imgHealth, title, titleComplement, id, servings, time, likes, healthScore }: Props) => {
    return (
        <div>
            <div className="container_recipe_image">
                <img src={imgRecipe} alt={altRecipe} className="recipe_image" />
            </div>

            <div className="recipe_container">
                <div className="recipe_title">
                    <span>{title}</span>
                    <span className="title_complement">{titleComplement}</span>
                </div>
                {/* <div className="recipe_info">
                    <span>{servings}</span>
                    <span>{time}</span>
                    <span>Facil</span>
                </div> */}
                <div className="recipe_rating">
                    <div className="recipe_rating__icons">
                        <img src={imgLikes} alt={altLikes} />
                        <span>{likes}</span>
                    </div>
                    <div className="recipe_rating__icons">
                        <span>{healthScore}</span>
                        <img src={imgHealth} alt={altHealth} />
                    </div>
                </div>
            </div>
        </div>
    )
}
