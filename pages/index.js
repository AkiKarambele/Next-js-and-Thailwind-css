import Header from "../components/Header";
import styles from "../styles/about.module.css"
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
      <title>WEBLIT . | Home  </title>
        <meta name="description" content="Free users details" />
        <meta name="keywords" content="Id name email adress of udifferent users" />
        <meta name="author" content="Aakanksha Karambele" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <div className={styles.overlay}>
      <Header />
      </div>
      
      
    </>
  );
};

export default index;