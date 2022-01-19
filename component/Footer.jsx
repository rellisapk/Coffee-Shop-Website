import Image from "next/image";
import styles from "../styles/Home/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            A CUP OF COFFEE CAN COMPLETE YOUR DAY.
            RODEO COFFEE SHOP WILL MAKE YOUR FAVORITE COFFEE.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR CAFFE</h1>
          <p className={styles.text}>
            1654 R. Don Road #214.
            <br /> NewYork, 85022
            <br /> (012) 345-867
          </p>
          <p className={styles.text}>
            2356 K. Laquie Rd #235.
            <br /> Melbourne, 85022
            <br /> (602) 867-1011
          </p>
          <p className={styles.text}>
            Senayan City #401.
            <br /> Indonesia, 85022
            <br /> (62) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;