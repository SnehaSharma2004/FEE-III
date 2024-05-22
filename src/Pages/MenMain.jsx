import Men_Main from "../Components/Men";
import MEN_MAIN22 from "../Components/Men_Main";
import MenHeader from "../Components/MenHeader";
import { MEN } from "../Objects/MEN";
import { MEN_MAIN } from "../Objects/MEN_MAIN";

export default function MenMain() {
	return (
		<>
			<div className="menalli" style={{position:"relative"}}>
				<MenHeader />

				<div className="menalli"
					style={{
						display: "flex",
						justifyContent: "center",
						gap: "14px",
					}}
				>
					<div className="menall"
						style={{
							position: "relative",
							display: "flex",
							justifyContent: "center",
							gap: "15px",
							flexWrap: "wrap",
						}}
					>
						{MEN_MAIN.map((item, index) => (
							<MEN_MAIN22
								key={index}
								image={item.image}
								title={item.title}
							/>
						))}
					</div>
					<div className="menalli"
						style={{
							position: "relative",
							display: "flex",
							justifyContent: "center",
							gap: "14px",
							flexWrap: "wrap",
						}}
					>
						{MEN.map((item, index) => (
							<Men_Main
								key={index}
								image={item.image}
								sale={item.sale}
								badge={item.badge}
								title={item.title}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
				<div
					className="r1-div"
					style={{
						position: "absolute",
						top: 0,
						right: 0,
						backgroundColor: "#ebebeb",
						width: "10%",
						height: "100%",
					}}
				></div>
			</div>
		</>
	);
}
