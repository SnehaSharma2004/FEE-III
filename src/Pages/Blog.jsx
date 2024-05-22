import Blog22 from "../Components/BlogC";
import { BlogObject } from "../Objects/Blog";
import BlogHeader from "../Components/BlogHeader";

export default function BlogMain() {
	return (
		<>
			<div className="menalli"
				style={{
					position: "relative",
					borderTop: "1px solid #ebebeb",
					marginTop: "50px",
					borderBottom: "1px solid #ebebeb",
					paddingBottom:"100px"

				}}
			>
				<BlogHeader />
				<div className="menalli"
					style={{
						position: "relative",
						display: "flex",
						justifyContent: "center",
						gap: "15px",
						width: "75%",
						margin: "0 auto",
					}}
				>
					{BlogObject.map((item, index) => (
						<Blog22
							key={index}
							image={item.image}
							date={item.date}
							month={item.month}
							title={item.title}
							description={item.description}
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
		</>
	);
}
