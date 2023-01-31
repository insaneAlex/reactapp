import styles from "./PageLayout.module.css";
const PageLayout = ({ children }) => {
  return <div className={styles.PageLayout}>{children}</div>;
};

export default PageLayout;
