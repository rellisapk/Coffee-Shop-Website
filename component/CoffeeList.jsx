import styles from "../styles/Home/CoffeeList.module.css";
import CoffeeCard from "./CoffeeCard.jsx"

const CoffeeList = ({coffeeList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST COFFEE IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        {coffeeList.map((coffee) => (
          <CoffeeCard key = {coffee._id} coffee = {coffee} />
        ))}
      </div>
    </div>
  );
};

export default CoffeeList;