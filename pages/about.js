import Link from "next/link";
import Navbar from "../components/Navbar";
import Head from "next/head";
import styles from "../styles/about.module.css"

const about = () => {
  return (
    <>
    <Head>
    <title>WEBLIT . | About  </title>
        <meta name="description" content="Free users details" />
        <meta name="keywords" content="Id name email adress of udifferent users" />
        <meta name="author" content="Aakanksha Karambele" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <div className={styles.overlay}>
    <div className="w-full absolute top-0 left-0 px-20 py-4 bg-black">
        <Navbar />
      </div>
    <header className="px-20 w-full h-screen bg-no-repeat z-1 bg-black bg-cover bg-fixed bg-teal-50"
    style={{
     backgroundImage: `url('/mm1.jpeg')`,
     }}>
       
       <div className="m-auto absolute top-52 left-48 left-50 flex flex-row space-x-10 text-white">
          <div className="border-r-4 pr-32"><h1 className="border-0 hover:border-b-2 text-white-500 hover:text-blue-600 pb-4 pb-7 mt-32 tracking-widest text-center text-4xl font-semibol">About Us</h1></div>
          <div className="border-b-2 border-r-2 px-20 py-20 bg-black w-3/5"><p>Well, there's a good reason for it — because of their values. The best brands combine physical, emotional, and logical elements into one exceptional customer (and employee) experience that you value as much as they do.
When your brand creates a genuine connection with customers and employees, they'll stay loyal to your company, thereby increasing your overall profitability. But this type of success doesn’t happen overnight.
            </p></div>
       </div>

    </header>
    <div className="pt-4 mt-auto bg-black text-white items-center">
         <h3 className="text-lg pt-8px pb-8 text-center">&copy; copyright | 2022 ,Made by Aakanksha</h3>
    </div>
    </div>
   </>
  );
};


export default about;