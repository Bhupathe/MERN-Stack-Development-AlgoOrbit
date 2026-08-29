import './hero.css'
import tang_san from './assets/main_char_1.jpg'

export default function Hero({hero}){
    return(
        <div className="main-character">
            <h1 className='charname'>{hero.name}</h1>
            <img src={hero.image} alt="" />
            <p>
                {hero.description}
            </p>
        </div>
    )
}