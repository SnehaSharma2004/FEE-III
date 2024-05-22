const Blog22 = ({ image, title, date, month, description }) => {
	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					position: "relative",
				}}
			>
				<div style={{ position: "relative" }}>
					<img src={image} alt={title} />
					<div
						style={{
							display: "flex",
							alignItems: "center",
							flexDirection: "column",
							position: "absolute",
							bottom: "4px",
							left: 0,
							color: "#fff",
							textTransform: "uppercase",
							textWrap: "nowrap",
							background: "#db3838",
							padding: "2px 12px",
						}}
					>
						<h2>{date}</h2>
						<h4> {month}</h4>
					</div>
				</div>

				<h4
					style={{
						fontSize: "15px",
						color: "#444444",
						padding: "15px 0",
					}}
				>
					{title}
				</h4>

				<p
					style={{
						fontSize: "14px",
						lineHeight: "24px",
						color: "#444444",
						fontFamily: "Gotham",
						textTransform: "none",
					}}
				>
					{description}
				</p>
			</div>
		</>
	);
};

export default Blog22;
