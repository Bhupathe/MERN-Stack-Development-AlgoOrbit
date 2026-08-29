import Navbar from '../navbar/navbar'
import Footer from '../footer/footer';
// import Hero1 from './hero/hero1';
// import Hero2 from './hero/hero2';
import Hero from './hero/hero'
import tang_san from './hero/assets/main_char_1.jpg'
import xiao_wu from './hero/assets/main_char_2.jpg'
import Contact from '../contact/contact';
import './page.css'

export default function Page(){
    const hero = {
        tang_san: {
            name: 'Tang San',
            description: "Tang San is the main protagonist of the 'Soul Land' (Douluo Dalu) Series. He was a former young prodigy and an outer sect disciple of the renowned Tang Sect who successfully learnt the Tang Sect's core skills which was ostracized and not allowed to the outer sect disciples despite the fact that none of the core disciples were able to. Following his death, he was reborn while maintaining his past memories as the son of the Clear Sky Douluo, Tang Hao of the Clear Sky Clan, and Blue Silver Empress Ah Yin.",
            image: tang_san
        },
        xiao_wu: {
            name: 'Xiao Wu',
            description: "Xiao Wu is a 100,000+ year old Soft Boned Rabbit and later becomes a 2nd Class God with the position of Rabbit Goddess. She is the wife of Sea God Tang San, the scabbard of Asura God Tang San, the mother of Tang Wutong and Tang Wulin, and the grandmother of Tang Xuanyu, Dai Ying, and Huo Zhanji.",
            image: xiao_wu
        },
    }

    return(
        <div className="main-content">
            <Navbar />
            <h1>Soul Land</h1>
            <p>
                Based on the novel of the same name, <strong>"Douluo Continent"</strong> tells the story of Tang San, who lost his mother at a young age, overcame many difficulties with his perseverance and strength.<br /><br />

        <em>Tang San (Xiao Zhan)</em> lives with his alcoholic blacksmith father Tang Hao. Tang San yearns to know about his mother, but Tang Hao never talks about his wife. When Tang San attends a Spirit Awakening ceremony with Spirit Master Su Yun Tao, he discovers that his Spirit is Blue Silver Grass, which he is told is the most common of useless spirits. Tang San's Spirit Strength, however, is exceptional—and he discovers he has a second Spirit, which he keeps hidden and only reveals to his father. Tang Hao tells his son that only by becoming the strongest and most courageous man of Douluo Continent, he would be qualified to hear of his mother. Tang San goes to study at Nuo Ding Spirit Master Academy, where he befriends fellow student Xiao Wu (Wu Xuanyi) and Spirit theorist Yu Xiao Gang (Chen Calvin), who suspects Tang San has a second spirit, and teaches him about Blue Silver Grass being not useless as most other Spirit Masters claim, and how to gain power as a Spirit Master. Running into trouble with highborn student and bully Xiao Chen Yu (Wang Kai), and to avoid entanglement with the Spirit Hall organisation that virtually controls Spirit Masters on Douluo Continent, Tang San and Xiao Wu leave Nuo Ding academy, where they meet several other powerful and enigmatic Spirit Masters on their way through the ranks of their profession.[6]
            </p>

            <br /> 
            {/* ------------------ Hero Content -------------------- */}
            <h2>Main Characters</h2>
            <div className='hero'>
                {Object.entries(hero).map(([key, value]) => (
                    <Hero key={key} hero={value} />
                ))}
            </div>
            <br />

            {/* -------------------------- Contact -----------------------*/}
            <Contact />

            <br />
            {/* --------------------- Footer --------------------------- */}
            <div>
                <Footer />
            </div>
        </div>
    );
}