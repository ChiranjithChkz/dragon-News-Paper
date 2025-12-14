import React from "react";
import { Outlet, useNavigation } from "react-router";
 
import Navbar from "../Component/Navbar";
import Loading from "../Pages/Loading";
import Footer from "../Component/homelayout/Footer";
 

const HomeLayout = () => {
  const {state}= useNavigation()
  return (
    <div>
      <header>
       
        {/* {import.meta.env.VITE_name} */}
       
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-3  grid grid-cols-12 gap-5">
       
        <section className="main col-span-6">
         {state =="loading" ? <Loading/> : <Outlet></Outlet> } 
        </section>
        
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
