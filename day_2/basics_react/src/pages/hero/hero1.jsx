import './hero.css';
import tang_san from './assets/main_char_1.jpg'

export default function Hero1(){
    return(
        <div className="main-character">
            <h1 className='charname'>Tang San</h1>
            <img src={tang_san} alt="" />
            <p>
                Tang San is the main protagonist of the "Soul Land" (Douluo Dalu) Series. He was a former young prodigy and an outer sect disciple of the renowned Tang Sect who successfully learnt the Tang Sect's core skills which was ostracized and not allowed to the outer sect disciples despite the fact that none of the core disciples were able to. Following his death, he was reborn while maintaining his past memories as the son of the Clear Sky Douluo, Tang Hao of the Clear Sky Clan, and Blue Silver Empress Ah Yin.
            </p>
        </div>
    )
}