import { Banner, Categories, NavBar } from "../components"

export const Home = () => {
    return (
        <>

            <NavBar title="Recipe" complementTitle="App" />
            <Banner />
            <Categories />

        </>
    )
}
