import Women_Main from "../Components/Women";
import WOMEN_MAIN22 from "../Components/Women_Main";
import WomenHeader from "../Components/WomenHeader";
import { WOMEN } from "../Objects/WOMEN";
import { WOMEN_MAIN } from "../Objects/WOMEN_MAIN";

export default function WomenMain() {
	return (
		<>
			<div className="menalli" style={{ position: "relative" }}>
				<WomenHeader />
				<div className="menalli"
					style={{
						display: "flex",
						justifyContent: "center",
						gap: "14px",
						
					}}
				>
					<div className="menalli"
						style={{
							display: "flex",
							justifyContent: "center",
							gap: "14px",
							flexWrap: "wrap",
						}}
					>
						{WOMEN.map((item, index) => (
							<Women_Main
								key={index}
								image={item.image}
								title={item.title}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
					<div
						style={{
							position: "relative",
							display: "flex",
							justifyContent: "center",
							gap: "15px",
							flexWrap: "wrap",
						}}
					>
						{WOMEN_MAIN.map((item, index) => (
							<WOMEN_MAIN22
								key={index}
								image={item.image}
								title={item.title}
							/>
						))}
					</div>
					<div
					className="r1-div"
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						backgroundColor: "#ebebeb",
						width: "10%",
						height: "100%",
					}}
				></div>
				</div>
			</div>
		</>
	);
}
