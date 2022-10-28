import Link from "next/link";
import Navbar from "../components/Navbar";



const Header = () => {
  return (
    <>
    
    <header className="bg-gradient-to-r from-black-500 to-black-500 w-full h-screen bg-no-repeat z-1 bg-black bg-cover bg-fixed bg-teal-50"
    style={{
     backgroundImage: `url('/mm1.jpeg')`,
     }}>
       <div className="w-full absolute top-0 left-0 px-20 py-4 bg-black">
        <Navbar />
      </div>

      <div className="m-auto absolute top-72 left-96 left-50">
        <h1 className="text-white tracking-widest text-center text-4xl font-semibol">
          
            Welcome to the world WEBLIT ..
        </h1>
       <Link href="/about"><button className="text-white bg-black text-1xl text-center ml-52 my-4 text-2xl pt-3 pr-10 pl-10 pb-3 border-r-8">About Us</button></Link>
      </div>
      
    </header>
    <div className="pt-4 mt-auto bg-black text-white items-center">
         <h3 className="text-lg pt-8px pb-8 text-center">&copy; copyright | 2022 ,Made by Aakanksha</h3>
    </div>
   </>
  );
};

export default Header;