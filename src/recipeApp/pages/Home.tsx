import { Banner, Categories, Footer, NavBar, RecipeCard } from "../components";
import { Divider } from "../components/Divider";
import { useEffect } from "react";
import { setRecipes } from "../../store/thunks";
import { dataList } from "../../services/api";
import { useAppDispatch, useAppSelector } from "../../store/reduxHook";
import Dish from "../../assets/images/dish1.png";
import Start from "../../assets/icons/ic_star.svg";
import Favorite from "../../assets/icons/ic-favorite.svg";

export const Home = () => {
    const { recipe } = useAppSelector((state) => state.recipe);

    const dispatch = useAppDispatch();
    useEffect(() => {
        dataList().then((data) => dispatch(setRecipes(data)));
    }, [dispatch]);

    return (
        <>
            <NavBar title="Recipe" complementTitle="App" />
            <Banner />
            <Categories />
            <Divider />
            <div className="cardsRecipes">
                {recipe.map((recipes: any) => (
                    <RecipeCard
                        altRecipe="Platillo"
                        altHealth="Salud"
                        altLikes="Likes"
                        imgRecipe={Dish}
                        imgLikes={Start}
                        imgHealth={Favorite}
                        title={recipes.name}
                        titleComplement="Complement"
                        likes={recipes.rating}
                        key={recipes.globalId}
                        id={recipes.id}
                        servings={recipes.numberOfServings}
                        time={recipes.totalTime}
                    />
                ))}
            </div>
            <Footer />
        </>
    );
};
