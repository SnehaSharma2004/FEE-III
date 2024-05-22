import "../Styles/Header02.css";

import { logo } from "../assets";
import { search } from "../assets";
import { facebook } from "../assets";
import { twitter } from "../assets";
import { instagram } from "../assets";
import { youtube } from "../assets";

function Header02() {
	return (
		<>
			<div className="main-header-container">
				<img src={logo} alt="site logo" />
				<div className="search-bar">
					<input type="text" placeholder="Search" />
					<select name="Categories" id="">
						<option value="All Categories">All Categories</option>
					</select>
					<div className="blank"></div>
					<img src={search} alt="search icon" />
				</div>
				<div className="header-logos">
					<div className="facebook">
						<img src={facebook} alt="" />
					</div>
					<div className="twitter">
						<img src={twitter} alt="" />
					</div>
					<div className="instagram">
						<img src={instagram} alt="" />
					</div>
					<div className="youtube">
						<img src={youtube} alt="" />
					</div>
				</div>
			</div>
		</>
	);
}

export default Header02;
