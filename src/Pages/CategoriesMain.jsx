import Categories_Main from "../Components/Categories_Main";
import Header03 from "../Components/Header03";
import { Categories } from "../Objects/Categories";

export default function CategoriesMain() {
	return (
		<>
			<Header03 />
			<div
				style={{
					position: "relative",
					display: "flex",
					justifyContent: "center",
					gap: "15px",
					flexWrap: "wrap",
				}}
			>
				<div
					className="r1-div"
					style={{
						position:"absolute",
						left:0,
						backgroundColor: "#ebebeb",
						width: "10%",
						height: "100%",
					}}
				></div>

				{Categories.map((item, index) => (
					<Categories_Main
						key={index}
						image={item.image}
						title={item.title}
					/>
				))}
			</div>
		</>
	);
}
