import './footer.css'
import Profile from './hero/profile'
import PageLinks from './hero/page_link'

export default function Footer(){
    return(
        <div className='footer'>
            <div className='hero'>
                <Profile />
                <PageLinks />
                <h3 className='location'>
                    Kalyani Building, Budnar School Road Udupi Railway station, Udupi, Karnataka, India.
                    <span>Pincode: 576102</span>
                </h3>
            </div>
            <h2>Thank you for visiting my page.</h2>
        </div>
    )
}