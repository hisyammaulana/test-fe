import React, { useState } from "react";
import Modal from "./Modal";

const Navbar = () => {
const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container border-b mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 font-bold title-font">
              Product Roadmap
            </a>
            <a onClick={() => setShowModal(true)} className="inline-flex text-white bg-cyan-700 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded-lg text-sm cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-plus text-sm"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg> 
              Add New Group
            </a>
          </nav>
        </div>
      </header>
      {showModal ? <Modal/>:''}
    </div>
  );
};

export default Navbar;
