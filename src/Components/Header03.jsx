import "../Styles/Header03.css";
import { linedarrow } from "../assets";

function Header03(){
    return(
        <>
        <div className="header-content" id="shop">
            <ul>
                <li>Go quickly to </li>
                <li><img src={linedarrow} alt="" /></li>
                <li><a href="#">Women:</a></li>
                <li><a href="#">Men:</a></li>
                <li><a href="#">Accessories:</a></li>
                <li><a href="#">Fashion:</a></li>
                <li><a href="#">Features:</a></li>
                <li><a href="#">Clothing:</a></li>
                <li><a href="#">Bag and Wallets:</a></li>
                <li><a href="#">Fragrances:</a></li>
                <li><a href="#">Caps & Hats:</a></li>
            </ul>
        </div>
        </>
    );
}
export default Header03;