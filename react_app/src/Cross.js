import styles from "./Cross.module.css";

export const Cross = ({ size }) => {
	return <div className={`${styles.cross} ${styles[size]}`}>&#10006;</div>;
};
