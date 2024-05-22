import Features22 from "../Components/Features";
import { FEATURES } from "../Objects/Features";
import FeaturesHeader from "../Components/FeaturesHeader";

export default function Features() {
	return (
		<>
			<div style={{ position: "relative" }}>
				<FeaturesHeader />
				<div
					style={{
						position: "relative",
						display: "flex",
						justifyContent: "center",
						gap: "19px",
						flexWrap: "wrap",
					}}
				>
					{FEATURES.map((item, index) => (
						<Features22
							key={index}
							image={item.image}
							title={item.title}
							price={item.price}
							rating={item.rating}
						/>
					))}
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
