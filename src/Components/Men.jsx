const Men_Main = ({ image, sale, badge, title, price, rating }) => {
	return (
		<>
			<div style={{ position: "relative" }}>
				<img src={image} alt={title} />
				<div
					style={{
						position: "absolute",
						top: "11px",
						right: 0,
					}}
				>
					{" "}
					<img src={sale} alt="" />
					<p
						style={{
							position: "absolute",
							top: "42%",
							left: "52%",
							transform: "translate(-50%, -50%)",
							color: "#fff",
							fontSize: "12px",
						}}
					>
						{badge}
					</p>
				</div>
				<div>
					<h1
						style={{
							fontSize: "15px",
							fontFamily: "Gotham",
							color: "#444444",
							padding: "15px 0",
						}}
					>
						{title}
					</h1>
					<hr style={{ border: "1px solid #e6e6e6" }} />
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "12px",
								padding: "15px 0 5px 0",
							}}
						>
							<h2
								style={{
									fontSize: "18px",
									fontFamily: "Gotham",
									color: "#444444",
								}}
							>
								{price}
							</h2>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
								}}
							>
								{rating.map((ele, i) => {
									return <p key={i}>{ele}</p>;
								})}
							</div>
						</div>
						<button
							style={{
								background: "#db3838",
								border: "none",
								color: "#fff",
								padding: "10px 25px",
								height: "37px",
							}}
						>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Men_Main;
