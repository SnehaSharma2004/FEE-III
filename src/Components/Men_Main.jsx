const MEN_MAIN22 = ({ image, title }) => {
	return (
		<>
			<div className="shorty" style={{ position: "relative" }}>
				<img src={image} alt={title} />
				<div
					style={{
						display: "flex",
						alignItems: "centre",
						flexDirection: "column",
						gap: "30px",
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						color: "#fff",
						textTransform: "uppercase",
						textWrap: "nowrap",
						fontSize: "25px",
					}}
				>
					
					<h1>{title}</h1>
					<button
						style={{
							background: "#db3838",
							border: "none",
							color: "#fff",
							padding: "20px 85px",
						}}
					>
						More
					</button>
				</div>
			</div>
		</>
	);
};

export default MEN_MAIN22;
