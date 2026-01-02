import { useEffect, useState } from "react";
import styles from "./Message.module.css";

function Message({ type, message }) {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (!message) {
			setVisible(false);
			return;
		}

		setVisible(true);

		const timer = setTimeout(() => {
			setVisible(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, [message]);

	return <>{visible && <p className={`${styles.message} ${styles[type]}`}>{message}</p>}</>;
}

export default Message;
