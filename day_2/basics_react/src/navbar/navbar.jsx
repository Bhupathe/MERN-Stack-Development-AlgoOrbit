import './navbar.css'

export default function Navbar(){
    return(
        <div className="navbar">
            <div class='icon'>
                <img src="tang_san.jpg" alt=""/>
                <span>Soul Land Fans</span>
            </div>
            <div class='link'>
                <a id="">Home</a>
                <a id="">About Us</a>
                <a id="">Services</a>
                <a id="">Products</a>
            </div>
            <button className="menu-btn">&#9776;</button>
        </div>
    )
}