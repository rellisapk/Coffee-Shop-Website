import styles from "../styles/Home/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
  return (
      <div className={styles.container}>
          <div className={styles.imgContainer}>
            <Image src="/img/featured.png" alt="" layout="fill" objectFit="contain" />
          </div>
      </div>
  );
};
export default Featured;