import { men1, men2, sale1, sale2 } from "../assets";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

const MEN = [
	{
		image: men1,
		title: "Printed Chiffon Dress",
		sale: sale1,
		badge: "SALE!",
		price: "£ 61.19",
		rating: [
			<FaStar fill="#ffc861" />,
			<FaStar fill="#ffc861" />,
			<FaStar fill="#ffc861" />,
			<FaStar fill="#ffc861" />,
			<FaRegStar fill="#ffc861" />,
		],
	},
	{
		image: men2,
		title: "Printed Chiffon Dress",
		sale: sale2,
		badge: "NEW!",
		price: "£ 61.19",
		rating: [
			<FaStar fill="#ffc861" />,
			<FaStar fill="#ffc861" />,
			<FaStar fill="#ffc861" />,
			<FaStar fill="#ffc861" />,
			<FaRegStar fill="#ffc861" />,
		],
	},
];

export { MEN };
