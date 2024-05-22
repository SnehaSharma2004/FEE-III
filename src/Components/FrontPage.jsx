import "../Styles/FrontPage.css";

import { arrowleft } from "../assets";
import { arrowright } from "../assets";

function FrontPage() {
	return (
		<>
			<div className="front-pg">
				<div className="content">
					<img src={arrowleft} alt="" />
					<div className="content-text">
						<h5>NEW!</h5>
						<h1>COLLECTION 2024</h1>
						<div className="line">
							<div></div>
							<h4>for</h4>
							<div></div>
						</div>
						<h3>MEN & WOMEN</h3>
					</div>
					<img src={arrowright} alt="" />
				</div>
			</div>
		</>
	);
}

export default FrontPage;
