import Link from "next/link";

const Navbar = () => {
  return (
    <>
    <div className="flex items-center flex-row space-x-96">
    <div className="mr-9">
      <h1 className="text-4xl font-bold text-white">WEBLIT  <span className="text-white">.</span></h1>
    </div>
      <nav className="Ml-9 pl-20">
        <ul className="Ml-5 flex flex-row space-x-10 text-white">
          <li className="">
            <Link href="/">
            <h3 className="text-lg border-0 hover:border-b-2 text-white-500 hover:text-blue-600">HOME</h3>
            
            </Link>
          </li>
          <li>
            <Link href="/about">
            <h3 className="text-lg border-0 hover:border-b-2 text-white-500 hover:text-blue-600">ABOUT</h3>
            </Link>
          </li>
          <li>
            <Link href="/conatact">
            <h3 className="text-lg border-0 hover:border-b-2 text-white-500 hover:text-blue-600">CONTACT</h3>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <h3 className="text-lg border-0 hover:border-b-2 text-white-500 hover:text-blue-600">USERS</h3>
            </Link>
          </li>
          
        </ul>
      </nav>
      </div>
    </>
  );
};

export default Navbar;
