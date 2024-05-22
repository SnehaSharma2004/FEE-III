import "../Styles/Header01.css";

import { cart, money, watch } from "../assets";

function Header() {
	return (
		<>
			<div className="main">
				<div className="part-1">
					<img src={cart} alt="Cart Logo" />
					<p>Free shipping on all order</p>
				</div>
				<div className="part-2">
					<img src={money} alt="Money Img" />
					<p>100% Money back gurantee</p>
				</div>
				<div className="part-1">
					<img src={watch} alt=" Watch Img" />
					<p>Online support 24/7</p>
				</div>
			</div>
		</>
	);
}

export default Header;
