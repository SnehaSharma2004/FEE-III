import "../Styles/Footer.css";
import { map } from "../assets";
import { mail } from "../assets";
import { call } from "../assets";
import { logo } from "../assets";
import { arrows } from "../assets";

export default function Footer() {
	return (
		<>
			<div className="main-footer-container" id="Footer">
				<div className="psuedo-footer">
					<div className="footer-left">
						<img src={logo} alt="" />
						<p>
							Vestibulum sagittis, nisl nec pellentesque suscipit,
							arcu nisi maximus neque, vitae finibus erat odio eu
							lacus. Curabitur malesuada erat eros, quis dignissim
							dui accumsan id. Cras non imperdiet metus. Sed nec
							turpis nec.
						</p>
					</div>
					<div className="footer-right">
						<div className="first-right-line">
							<p>SIGN UP FOR OUR NEWSLETTER !</p>
							<div>
								<input
									type="text"
									placeholder="hello@psdfreebies.com"
								/>
								<button>Submit</button>
							</div>
						</div>
						<hr />
						<div className="rightpoints">
							<div className="points1">
								<p>INFORMATION</p>
								<ul>
									<li>
										<img src={arrows} alt="" />
										Careers
									</li>
									<li>
										<img src={arrows} alt="" />
										Investor Relations
									</li>
									<li>
										<img src={arrows} alt="" />
										Press Releases
									</li>
									<li>
										<img src={arrows} alt="" />
										Shop with Points
									</li>
								</ul>
							</div>
							<div className="points2">
								<p>CUSTOMER CARE</p>

								<ul>
									<li>
										<img src={arrows} alt="" />
										Returns
									</li>
									<li>
										<img src={arrows} alt="" />
										Shipping Info
									</li>
									<li>
										<img src={arrows} alt="" />
										Gift Cards
									</li>
									<li>
										<img src={arrows} alt="" />
										Size Guide
									</li>
								</ul>
							</div>
							<div className="points3">
								<p>STORE INFORMATION</p>

								<ul>
									<li>
										<img src={map} alt="" />
										<p>
											address: Lorem ipsum dolor sit amet,
											Onsectetuer adipiscing elit.
										</p>
									</li>
									<li>
										<img src={mail} alt="" />
										<p>email: demo@posthemes.com</p>
									</li>
									<li>
										<img src={call} alt="" />
										<p>phone: 0987.654.321</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<p className="copyright">
					&#169; 2015 Psdfreebies. All Rights Reserved
				</p>
			</div>
		</>
	);
}
