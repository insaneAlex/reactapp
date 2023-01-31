import styles from "./AppLayout.module.css";

const AppLayout = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

export default AppLayout;
