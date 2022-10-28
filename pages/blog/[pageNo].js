import Link from "next/link";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import styles from "../../styles/about.module.css"
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((curElem) => {
    return {
      params: {
        pageNo: curElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const myData = ({ data }) => {
  const { id, name, email, address, phone, company, username} = data;
  return (
    <>
    <Head>
        <title>WEBLIT . | Author  </title>
        
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
      <table className="border-br-8 border-gray-400 mx-auto mt-20 text-xl border-collapse border border-b-slate-400">
  <thead>
    <tr>
      <th className="bg-neutral-300 pt-4 px-6 pb-4 border border-slate-300">ID</th>
      <th className="bg-neutral-300 pt-4 px-6 pb-4 border border-slate-300">{id}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="bg-neutral-50 pt-4 px-6 pb-4 border border-slate-300">Name</td>
      <td className="bg-neutral-50 pt-4 px-6 pb-4 border border-slate-300">{name}</td>
    </tr>
    <tr>
      <td className="bg-neutral-300 pt-4 px-6 pb-4 border border-slate-300">Email</td>
      <td className="bg-neutral-300 pt-4 px-6 pb-4 border border-slate-300">{email}</td>
    </tr>
    <tr>
      <td className="bg-neutral-50 pt-4 px-6 pb-4 border border-slate-300">Username</td>
      <td className="bg-neutral-50 pt-4 px-6 pb-4 border border-slate-300">{username}</td>
    </tr>
    <tr>
      <td className="bg-neutral-300 pt-4 px-6 pb-4 border border-slate-300">Phone</td>
      <td className="bg-neutral-300 pt-4 px-6 pb-4 border border-slate-300">{phone}</td>
    </tr>
    <tr>
      <td className="bg-neutral-50 pt-4 px-6 pb-4 border border-slate-300">Address</td>
      <td className="bg-neutral-50 pt-4 px-6 pb-4 border border-slate-300">{`${address.street}, ${address.city}, ${address.zipcode}`}</td>
    </tr>
    <tr>
      <td className="bg-neutral-300 pt-4 px-6 pb-4 border border-slate-300">Company</td>
      <td className="bg-neutral-300 pt-4 px-6 pb-4 border border-slate-300">{company.name}</td>
    </tr>
  </tbody>
  
</table>

    
      </header>
      </div>
      <div className="pt-4 mt-auto bg-black text-white items-center">
         <h3 className="text-lg pt-8px pb-8 text-center">&copy; copyright | 2022 ,Made by Aakanksha</h3>
    </div>
    
       </>
    );
};


 export default myData;

// What will happend if the file is already exist in our folder and we tried to call the pages dynamic route ?

// Which page will be serve by the next.js app?

// getStaticPaths defines which pages next.js has to render when exporting.
// It is used to generate all available dynamic routes.