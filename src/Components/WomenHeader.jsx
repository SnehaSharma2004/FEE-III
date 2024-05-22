import "../Styles/WomenHeader.css";

import { smallleftarrow, smallrightarrow } from "../assets";

export default function WomenHeader(){
    return(
        <>
        <div className="main-women-header">
				<h1>WOMEN</h1>
				<div className="arrows">
					<img src={smallleftarrow} alt="" />
					<img src={smallrightarrow} alt="" />
				</div>
			</div>
        </>
    );
}