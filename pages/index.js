import axios from 'axios';
import Head from 'next/head';
import { useState } from "react";
import CoffeeList from '../component/CoffeeList';
import Featured from '../component/Featured';
import styles from '../styles/Home.module.css';


export default function Home({coffeeList, admin}) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Rodeo Coffee Shop</title>
        <meta name="description" content="Best coffee shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <CoffeeList coffeeList = {coffeeList} />
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");
  return{
    props:{
      coffeeList:res.data,
      admin,
    },
  };
};
