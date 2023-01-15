import imageSponsor from '../../assets/images/sponsor.png'

export const Footer = () => {
    return (
        <div className="container_footer">
            <span className="container_text">Con el patrocinio de</span>
            <img src={imageSponsor} alt='Sponsor' className='container_sponsor' />
        </div>
    )
}
