import logo from "./assets/tv.png"
import elipse from "./assets/Ellipse 1.svg"
import menu from "./assets/Menu alt 4.svg"
import poster from "./assets/Poster.png"
import play from "./assets/play.svg"
const Header = ()=> {
    return(
        <>
        {/* <img src={poster} alt="" className="poster"/> */}
        <header className="text-white flex">
            <div className="flex flex-1 justify-between">
            <a href="#" className="logo flex gap-3 items-center"><img src={logo} alt="" />Movie Boxss</a>
            <input type="text" placeholder="search movie" id="" />
            <ul className="nav-bar flex items-center">
                <li></li>
                <li className="sign-in">sign In</li>
                <li className="menu icon"><img src={elipse} alt="" /></li>
            </ul>
            </div>            
        </header>
        <div>
            <section className="home text-white">
                <div className="home-text">
                    <span>John Wick 3 : Parabellum</span>
                    <p className="rating"><img src="" alt="" />86.0 / 100 <img src="" alt="" />97%</p>
                    <p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                    {/* <a href="#" class="btn">Watch Trailer</a> */}
                    <button className="btn"><img src={play} alt="" />Watch Trailer</button>
                </div>
            </section>
        </div>
        
        
        
        </>
    )
}

export default Header;