import instagram from './assets/instagram.png'
import facebook from './assets/facebook.png'
import linkedin from './assets/linkedin.png'
import './profile.css'

export default function Profile(){
    return(
        <div className='profile'>
            <h2 className='dev_name'>Bhupathe</h2>
            <div className="links">
                <a><img src={instagram} alt="" /></a>
                <a><img src={facebook} alt="" /></a>
                <a><img src={linkedin} alt="" /></a>
            </div>
        </div>
    )
}