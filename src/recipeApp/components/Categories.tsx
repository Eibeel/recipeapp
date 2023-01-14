import { CardCategories } from "./CardCategories"
import iconVegetarian from '../../assets/icons/ic_vegetarian.svg';
import iconMain from '../../assets/icons/ic_main.svg';
import iconCake from '../../assets/icons/ic_cake.svg';
import iconFastFood from '../../assets/icons/ic_fast-food.svg';
import iconKids from '../../assets/icons/ic_kids.svg';
import iconSoup from '../../assets/icons/ic_soup.svg';

export const Categories = () => {
    return (
        <div className="cards_container">
            <CardCategories title={"Vegetarianos"} icon={iconVegetarian} alt="Vegetarian" />
            <CardCategories title={"Principales"} icon={iconMain} alt="Main" />
            <CardCategories title={"Tortas"} icon={iconCake} alt="Cake" />
            <CardCategories title={"Rápida"} icon={iconFastFood} alt="FastFood" />
            <CardCategories title={"Menú Niños"} icon={iconKids} alt="Kids" />
            <CardCategories title={"Sopas"} icon={iconSoup} alt="Soup" />
        </div>
    )
}
