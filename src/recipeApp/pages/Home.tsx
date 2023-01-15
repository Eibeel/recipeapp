import { Banner, Categories, Footer, NavBar, RecipeCard } from "../components"
import { Divider } from "../components/Divider"
import Cherry from '../../assets/images/cherry.png'
import Start from '../../assets/icons/ic_star.svg'
import Favorite from '../../assets/icons/ic-favorite.svg'
import { useEffect } from "react"
import { setRecipes } from "../../store/thunks"
import { dataList } from "../../services/api"
import { useAppDispatch, useAppSelector } from "../../store/reduxHook"

export const Home = () => {

    const { recipe } = useAppSelector(state => state.recipe)
    
    const dispatch = useAppDispatch();
    useEffect(() => {
        dataList().then(data => dispatch(setRecipes(data)))
    }, [dispatch])


    return (
        <>
            <NavBar title="Recipe" complementTitle="App" />
            <Banner />
            <Categories />
            <Divider />
            <div className="cardsRecipes">
                {
                    recipe.map((recip: any) => (
                        <RecipeCard
                            altRecipe="Platillo"
                            altHealth="Salud"
                            altLikes="Likes"
                            imgRecipe={Cherry}
                            imgLikes={Start}
                            imgHealth={Favorite}
                            title={recip.name}
                            titleComplement="Complement"
                            likes={recip.rating}
                            key={recip.globalId}
                            id={recip.id}
                        />
                    ))
                }
            </div>
            <Footer />
        </>
    )
}
