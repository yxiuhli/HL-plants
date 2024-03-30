import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>HL-plants</div>
      <div className={styles.text}>
        Cửa hàng cây cảnh HL-plants © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
