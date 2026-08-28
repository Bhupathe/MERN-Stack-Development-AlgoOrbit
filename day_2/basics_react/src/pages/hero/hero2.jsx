import './hero.css';
import xiao_wu from './assets/main_char_2.jpg'

export default function Hero2(){
    return(
        <div className="main-character">
            <h1 className='charname'>Xiao Wu</h1>
            <img src={xiao_wu} alt="" />
            <p>
                Xiao Wu is a 100,000+ year old Soft Boned Rabbit and later becomes a 2nd Class God with the position of Rabbit Goddess. She is the wife of Sea God Tang San, the scabbard of Asura God Tang San, the mother of Tang Wutong and Tang Wulin, and the grandmother of Tang Xuanyu, Dai Ying, and Huo Zhanji.
            </p>
        </div>
    )
}