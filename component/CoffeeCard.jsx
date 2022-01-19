import Image from "next/image";
import styles from "../styles/Home/CoffeeCard.module.css";
import Link from "next/link";

const CoffeeCard = ({ coffee }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${coffee._id}`} passHref>
        <Image src={coffee.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{coffee.title}</h1>
      <span className={styles.price}>${coffee.prices[0]}</span>
      <p className={styles.desc}>{coffee.desc}</p>
    </div>
  );
};

export default CoffeeCard;