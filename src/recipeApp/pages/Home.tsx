import { Banner, Categories, Footer, NavBar, RecipeCard } from "../components"
import { Divider } from "../components/Divider"
import Cherry from '../../assets/images/cherry.png'
import Start from '../../assets/icons/ic_star.svg'
import Favorite from '../../assets/icons/ic-favorite.svg'

export const Home = () => {
    return (
        <>
            <NavBar title="Recipe" complementTitle="App" />
            <Banner />
            <Categories />
            <Divider />
            <div className="cardsRecipes">
                <RecipeCard
                    altRecipe="Platillo"
                    altHealth="Salud"
                    altLikes="Likes"
                    imgRecipe={Cherry}
                    imgLikes={Start}
                    imgHealth={Favorite}
                    title="title"
                    titleComplement="Complement"
                    id={5}
                    servings={5}
                    time={3}
                    likes={8}
                    healthScore={7}
                />
                <RecipeCard
                    altRecipe="Platillo"
                    altHealth="Salud"
                    altLikes="Likes"
                    imgRecipe={Cherry}
                    imgLikes={Start}
                    imgHealth={Favorite}
                    title="title"
                    titleComplement="Complement"
                    id={5}
                    servings={5}
                    time={3}
                    likes={8}
                    healthScore={7}
                />
                <RecipeCard
                    altRecipe="Platillo"
                    altHealth="Salud"
                    altLikes="Likes"
                    imgRecipe={Cherry}
                    imgLikes={Start}
                    imgHealth={Favorite}
                    title="title"
                    titleComplement="Complement"
                    id={5}
                    servings={5}
                    time={3}
                    likes={8}
                    healthScore={7}
                />
                <RecipeCard
                    altRecipe="Platillo"
                    altHealth="Salud"
                    altLikes="Likes"
                    imgRecipe={Cherry}
                    imgLikes={Start}
                    imgHealth={Favorite}
                    title="title"
                    titleComplement="Complement"
                    id={5}
                    servings={5}
                    time={3}
                    likes={8}
                    healthScore={7}
                />
                <RecipeCard
                    altRecipe="Platillo"
                    altHealth="Salud"
                    altLikes="Likes"
                    imgRecipe={Cherry}
                    imgLikes={Start}
                    imgHealth={Favorite}
                    title="title"
                    titleComplement="Complement"
                    id={5}
                    servings={5}
                    time={3}
                    likes={8}
                    healthScore={7}
                />
                <RecipeCard
                    altRecipe="Platillo"
                    altHealth="Salud"
                    altLikes="Likes"
                    imgRecipe={Cherry}
                    imgLikes={Start}
                    imgHealth={Favorite}
                    title="title"
                    titleComplement="Complement"
                    id={5}
                    servings={5}
                    time={3}
                    likes={8}
                    healthScore={7}
                />
                <RecipeCard
                    altRecipe="Platillo"
                    altHealth="Salud"
                    altLikes="Likes"
                    imgRecipe={Cherry}
                    imgLikes={Start}
                    imgHealth={Favorite}
                    title="title"
                    titleComplement="Complement"
                    id={5}
                    servings={5}
                    time={3}
                    likes={8}
                    healthScore={7}
                />
            </div>
            <Footer />
        </>
    )
}
