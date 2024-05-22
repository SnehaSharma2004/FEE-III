import { women1, women2 } from "../assets";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

const WOMEN = [
	{
		image: women1,
		title: "Printed Chiffon Dress",
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
		image: women2,
		title: "Printed Chiffon Dress",
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

export { WOMEN };
