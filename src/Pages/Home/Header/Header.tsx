import React from 'react';
import headerImages from "../../../Assets/headerImage.jpg";
import { FaAngleDoubleRight } from "react-icons/fa";

const Header = () => {
    return (
        <header className='h-[400px] lg:h-screen  w-full' style={{ background: `linear-gradient(rgb(58 35 19 / 48%),rgb(58 35 19 / 48%)), url(${headerImages}) no-repeat top`, backgroundSize: 'cover' }}>
            <div className='w-11/12 lg:w-7/12 mx-auto flex flex-col justify-center items-center h-[400px] lg:h-screen text-center text-white'>
                <h1 className='text-3xl md:text-6xl lg:text-7xl font-bold mb-5'>The New Antiquities <br /> Research Association</h1>
                <p className='text-md md:text-lg'>Our semiannual meetings provide an opportunity for sharing research on a wide array of subjects.</p>
                <button className='btn bg-teal-700 hover:bg-teal-800 border-none mt-8 text-xl'> Share your information <FaAngleDoubleRight className='ml-3 animate-ping' /> </button>
            </div>

        </header>
    );
};

export default Header;