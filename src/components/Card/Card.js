import React from "react";
import styles from "./Card.module.css";

const Card = ({ namesList, type, deleteFunc }) => {
	const cards = namesList.map(({ name, age, address, phone }, idx) => (
		<div
			className={styles.cardWrapper}
			key={idx}
			style={{ backgroundColor: type === "girl" ? "pink" : "green" }}
		>
			<div>Name:{name}</div>
			<div>Age: {age}</div>
			<div>Adress: {address}</div>
			<div>Phone: {phone}</div>
			<div
				className={styles.deleteBtn}
				onClick={(event) => deleteFunc(event, idx)}
			>
				x
			</div>
		</div>
	));
	return <div>{cards}</div>;
};

export default Card;
