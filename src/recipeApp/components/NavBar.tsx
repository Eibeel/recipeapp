

type Props = {
    title: string;
}

export const NavBar = ({ title }: Props) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}
