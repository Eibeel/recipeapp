import banner from "../../assets/images/bcq.jpg";

export const Banner = () => {
    return (
        <>
            <div className="banner_container">
                <img src={banner} alt="banner" className="banner_container__img" />
            </div>
            <div className="slogan_container">
                <h1 className="slogan_container__firstText">Recetas</h1>
                <h1 className="slogan_container__secondText">para todos</h1>
            </div>
        </>
    );
};
