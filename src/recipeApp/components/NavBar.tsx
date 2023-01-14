import iconHome from "../../assets/icons/ic_home.svg";

type Props = {
    title: string;
    complementTitle: string;
};

export const NavBar = ({ title, complementTitle }: Props) => {
    return (
        <nav className="nav">
            <div className="nav__title_container">
                <h1 className="nav__title_container__nav__recipe">{title}</h1>
                <h1 className="nav__title_container__nav__app">{complementTitle}</h1>
            </div>
            <img src={iconHome} alt="iconHome" />
        </nav>
    );
};
