
type Props = {
    alt: string;
    icon: string;
    title: string;
}

export const CardCategories = ({ alt, icon, title }: Props) => {
    return (
        <div className='card_container__info'>
            <img src={icon} alt={alt} />
            <span>{title}</span>
        </div>
    )
}
