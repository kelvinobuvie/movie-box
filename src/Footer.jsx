import facebook from "./assets/fa-brands_facebook-square.svg"
import instagram from "./assets/fa-brands_instagram.svg"
import twitter from "./assets/fa-brands_twitter.svg"
import youtube from "./assets/fa-brands_youtube.svg"
const Footer = () => {

    return (
            <footer className="mt-32 mb-16">
                <div className="socials">
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={twitter} alt="" />
                    <img src={youtube} alt="" />
                </div>
                <div className="links">
                    <a href="#">Conditions of Use</a>
                    <a href="#">Privacy & policy</a>
                    <a href="#">Press Room</a>
                </div>
                <div class="copyright">
                     <p>&#169; 2023 Moviebox by Kelvin Obuvie.</p>
                </div>
            </footer>
        )
    
};

export default Footer;
