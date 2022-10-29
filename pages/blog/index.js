import Link from "next/link";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import styles from "../../styles/about.module.css"

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
 const data = await res.json();
 return {
    props: {
      data,
    },
  };
};

const blog = ({ data }) => {
  return (
    <>
    <Head>
        <title>WEBLIT . | USERS  </title>
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
    <header className="m-auto px-20 py-20 w-full h-max bg-no-repeat z-1 bg-black bg-cover bg-fixed bg-teal-50"
    style={{
     backgroundImage: `url('/mm1.jpeg')`,
     }}>
       <div className="m-auto flex flex-wrap">
    {data.map((curElem) => {
return(



<div key={curElem.id} className="border-l-8 border-gray-400 rounded-br-3xl w-80 pl-10 pr-4 py-5 ml-12 my-6 bg-gray-100 flex flex-col border border-gray-200 shadow-md">
<h3 className="text-2xl mb-2">{curElem.name}</h3>
<p className="text-end flex-1 flex flex-row space-x-4 pl-20"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
</svg>
 {curElem.company.name}</p>
<Link href={`/blog/${curElem.id}`}>
    <p className="text-lg mt-4 inline-flex items-center py-3 px-8 font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      View
      <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </p>
  </Link>
  </div>
  

      );
    })}
    </div>
       
    </header>
    <div className="pt-4 mt-auto bg-black text-white items-center">
         <h3 className="text-lg pt-8px pb-8 text-center">&copy; copyright | 2022 ,Made by Aakanksha</h3>
    </div>
    </div>
    </>
  );
};

export default blog;
