const Categories_Main = ({ image, title }) => {
	return (
		<>
			<div style={{ position: "relative" }}>
				<img src={image} alt={title} />
				<div
					style={{
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
						gap: "30px",
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						color: "#fff",
						textTransform: "uppercase",
						textWrap: "nowrap",
					}}
				>
					<h1>{title}</h1>
					<button
						style={{
							background: "#db3838",
							border: "none",
							color: "#fff",
							padding: "10px 25px",
						}}
					>
						Click Here
					</button>
				</div>
			</div>
		</>
	);
};

export default Categories_Main;
